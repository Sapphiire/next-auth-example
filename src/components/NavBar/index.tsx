import React from 'react'
import cn from 'classnames'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './style.module.css'


const NAVBAR_ROUTES = [
    {
        link: '/map',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>),
        name: 'map'
    },
    {
        link: '/transfers',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>),
        name: 'transfers'
    },
    {
        link: '/dashboard',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>),
        name: 'dashboard'
    },
]

type NavBarProps = {
    className?: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
    const { pathname } = useRouter()
    return (
        <nav className={cn(styles.container, className)}>
            <ul>
                {
                    NAVBAR_ROUTES.map(route => (
                        <li key={route.link} className={cn(styles.link, route.link === pathname && styles.active)}>
                            <Link href={route.link} passHref>
                                {route.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>

        </nav>
    )
}


export { NavBar }
export type { NavBarProps }
