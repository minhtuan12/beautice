import store from "../store/configureStore.js";
import {initialSaga} from "../store/slices/routing/index.js";
import {getAuthToken, notify, removeAuthToken} from "../utils/helpers.js";
import {getMe} from "../api/auth/index.js";
import _ from "lodash";
import {redirect} from "react-router-dom";
import {requestGetMeFail, requestGetMeSuccess} from "../store/slices/auth/index.js";
import {queryClient} from "../utils/queryClient.js";

export const rootLoader = async ({request}, requiredAuth, saga = null) => {
    const url = new URL(request.url);
    let {auth} = store.getState();
    const authRoutes = ['/login', '/register']

    const authToken = _.isEmpty(auth.authUser) && getAuthToken()
    const profileDataCache = queryClient.getQueryData(['me'])
    if (authToken) {
        if (!profileDataCache) {
            try {
                const data = await queryClient.fetchQuery({
                    queryKey: ['me'],
                    queryFn: () => getMe(),
                    staleTime: 1000 * 60 * 5
                })

                switch (data.status) {
                    case 200:
                        store.dispatch(requestGetMeSuccess(data.data))
                        break
                    case 401:
                        removeAuthToken()
                        break
                    case 500:
                        notify('error', 'Some errors may occur')
                        break
                }
            } catch (e) {
                store.dispatch(requestGetMeFail())
                notify('error', 'Failed to get profile')
            }
        } else {
            store.dispatch(requestGetMeSuccess(profileDataCache?.data))
        }
    }
    auth = store.getState().auth

    if (requiredAuth) {
        if (!getAuthToken()) {
            return redirect('/login')
        }
    }

    if (authRoutes.includes(url.pathname) && !_.isEmpty(auth.authUser)) {
        return redirect('/')
    }

    if (saga) {
        await store.dispatch(initialSaga(saga));
    }

    return null;
}
