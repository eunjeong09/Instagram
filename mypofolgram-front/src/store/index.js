import { createStore } from "vuex";
import UserModule from './user'
import AuthModule from './auth'
import CommentModule from './comments'
import createPersistedState from "vuex-persistedstate";
// export default createStore({
//     modules : {
//         userInfo : UserModule,
//         auth : AuthModule
//     }    
// })

const store = createStore ({
    modules : {
        userInfo : UserModule,
        auth : AuthModule,
        comment : CommentModule
    },
    plugins: [
        createPersistedState({
            //주목! : 여기에 쓴 모듈만 저장됩니다.
            paths: ["userInfo","auth", "comment"],
        }),
    ],
})
export default store;