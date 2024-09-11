import appReducer from './slices/app'
import authReducer from './slices/auth'
import blogReducer from './slices/blog'

const rootReducer = {
    app: appReducer,
    auth: authReducer,
    blog: blogReducer
}

export default rootReducer
