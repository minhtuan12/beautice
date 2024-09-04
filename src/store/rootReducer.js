import appReducer from './slices/app'
import blogReducer from './slices/blog'

const rootReducer = {
    app: appReducer,
    blog: blogReducer
}

export default rootReducer
