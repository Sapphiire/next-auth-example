import type { RootState } from '@src/store'
import type { User } from '@src/services/auth/constants'


const selectCurrentUser = (state: RootState): User | null => state.auth.user

// WARNING: Testing deep equal selector
// import { createDeepEqualSelector } from '@src/store/createSelector'
// const selectCurrentUser = createDeepEqualSelector(
//     [ (state: RootState) => state.auth.user ],
//     (user) => user,
// )


export { selectCurrentUser }
