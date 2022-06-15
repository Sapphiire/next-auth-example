import type { RootState } from '@src/store'
import {createDeepEqualSelector} from '@src/store/createSelector'


const selectCurrentUser = createDeepEqualSelector(
    (state: RootState) => state.auth,
    (auth) => auth.user,
)


export { selectCurrentUser }
