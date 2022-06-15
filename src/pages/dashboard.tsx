import type { NextPage } from 'next'

import { useUser } from '@src/hooks/useUser'

import styles from '@src/styles/Dashboard.module.css'


const DashboardPage: NextPage = () => {
    const { user, logout } = useUser()

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <code>{JSON.stringify(user)}</code>
            <div />
            <button onClick={logout}>logout</button>
        </div>
    )
}


export default DashboardPage
