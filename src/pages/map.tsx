import type { NextPage } from 'next'

import { useUser } from '@src/hooks/useUser'

import styles from '@src/styles/Dashboard.module.css'


const MapPage: NextPage = () => {
    const { logout } = useUser()
    return (
        <div className={styles.container}>
            <h1>Map</h1>
            <div />
            <button onClick={logout}>logout</button>
        </div>
    )
}


export default MapPage
