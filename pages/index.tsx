import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import styles from 'styles/Home.module.css'

type HomeProps = {
    h: number
}

const HomePage: NextPage<HomeProps> = ({ h }) => {
    return (
        <div className={styles.container}>
            <h1>next app</h1>
            <code>{h || 'there are no \'h\' prop'}</code>
            <div />
            <Link href="/about">About</Link>
            <div />
            <Link href="/login">Login</Link>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    return {
        props: {
            h: 'h prop'
        }
    }
}

export default HomePage

