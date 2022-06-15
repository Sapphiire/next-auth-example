import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

import styles from '@src/styles/Dashboard.module.css'


const DashboardPage: NextPage = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <div />
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>toggle theme</button>
        </div>
    )
}


export default DashboardPage
