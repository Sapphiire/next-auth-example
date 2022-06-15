import type { NextPage } from 'next'

import { useUser } from '@src/hooks/useUser'

import styles from '@src/styles/Dashboard.module.css'


const TransfersPage: NextPage = () => {
    const { user } = useUser()

    return (
        <div className={styles.container}>
            <h1>Transfers</h1>
            <code>{JSON.stringify(user)}</code>
        </div>
    )
}


export default TransfersPage
