import type { GetServerSideProps, NextPage } from 'next'

import { useUser } from '@src/hooks/useUser'

import styles from '@src/styles/Dashboard.module.css'


type TransferPageProps = {
    id: string
}

const TransferPage: NextPage<TransferPageProps> = ({ id }) => {
    const { user } = useUser()

    return (
        <div className={styles.container}>
            <h1>Transfer ID: {id}</h1>
            <code>{JSON.stringify(user)}</code>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query.id

    return {
        props: {
            id
        }
    }
}


export default TransferPage
