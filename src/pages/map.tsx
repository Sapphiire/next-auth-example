import type { NextPage, GetServerSideProps } from 'next'

import { useUser } from '@src/hooks/useUser'

import styles from '@src/styles/Dashboard.module.css'


const MapPage: NextPage = () => {
    const { signOut } = useUser()
    return (
        <div className={styles.container}>
            <h1>Map PAGE</h1>
            <div />
            <button onClick={signOut}>logout</button>
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


export default MapPage
