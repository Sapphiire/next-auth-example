import type { NextPage, GetServerSideProps } from 'next'
import { useTheme } from 'next-themes'

import { useUser } from '@src/hooks/useUser'

import styles from '@src/styles/Dashboard.module.css'


const DashboardPage: NextPage = () => {
    const { signOut, user } = useUser()
    const { theme, setTheme } = useTheme()

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <div />
            <code>{JSON.stringify(user)}</code>
            <div />
            <button onClick={signOut}>logout</button>
            <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>toggle theme</button>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            h: '1',
        }
    }
}

export default DashboardPage
