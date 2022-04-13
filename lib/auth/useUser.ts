import { useState } from 'react'

const useUser = () => {
    const user = useState<any>(null)

    return { user }
}

export default useUser