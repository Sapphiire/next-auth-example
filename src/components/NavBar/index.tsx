import React from 'react'
import cn from 'classnames'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './style.module.css'


const NAVBAR_ROUTES = [
    {
        link: '/map',
        icon: '',
        name: 'map'
    },
    {
        link: '/transfers',
        icon: '',
        name: 'transfers'
    },
    {
        link: '/dashboard',
        icon: '',
        name: 'dashboard'
    },
]

type NavBarProps = {
    className?: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
    const { pathname } = useRouter()
    return (
        <div className={cn(styles.container, className)}>
            {
                NAVBAR_ROUTES.map(route => (
                    <div key={route.link} className={cn(styles.link, route.link === pathname && styles.active)}>
                        <Link href={route.link} >{route.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}


export { NavBar }
export type { NavBarProps }
