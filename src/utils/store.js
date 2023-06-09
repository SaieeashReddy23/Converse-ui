import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../features/User/UserSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export default store
