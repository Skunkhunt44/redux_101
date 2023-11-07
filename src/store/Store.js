import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../CartSlice'




// export default configureStore({
//   reducer: {}
// })

export const store = configureStore({
    reducer:{
        counter: cartSlice,
    },
})