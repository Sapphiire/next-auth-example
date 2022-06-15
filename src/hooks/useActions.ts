import { useMemo } from 'react'
import { bindActionCreators } from 'redux'

import { useAppDispatch } from '@src/store'

const createActionsHook = <T>(actions: T) => {
    return (deps: any[] = []): T => {
        const dispatch = useAppDispatch()
        return useMemo(
            () => {
                if (Array.isArray(actions)) {
                    return actions.map((a) => bindActionCreators(a, dispatch))
                }
                return bindActionCreators(actions as any, dispatch)
            },
            deps ? [dispatch, ...deps] : [dispatch]
        ) as T
    }
}

const useActions = <T>(actions: T, deps: any[] = []): T => {
    return createActionsHook(actions)(deps)
}


export { useActions }
