import type { GetServerSideProps, NextPage } from 'next'

import { useUser } from '@src/hooks/useUser'

import styles from 'src/styles/Landing.module.css'


type IndexPageProps = {
    h: string
}

const IndexPage: NextPage<IndexPageProps> = () => {
    const { signIn } = useUser()

    return (
        <div className={styles.container}>
            <h1>Index Page</h1>
            <button onClick={() => signIn({
                email: '1@mail.ru',
                password: '1234'
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
