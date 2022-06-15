import type { GetServerSideProps, NextPage } from 'next'

import { useUser } from '@src/hooks/useUser'

import styles from 'src/styles/Landing.module.css'


type IndexPageProps = {
    h: string
}

const IndexPage: NextPage<IndexPageProps> = () => {
    const { login } = useUser()

    return (
        <div className={styles.container}>
            <h1>Landing Page</h1>
            <button onClick={() => login({
                email: '145@mail.ru',
                password: '12134'
            })}>log in</button>
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


export default IndexPage
