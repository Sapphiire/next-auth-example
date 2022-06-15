import React from 'react'
import cn from 'classnames'

import { NavBar } from '@src/components/NavBar'

import styles from './style.module.css'


type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const AuthLayout: React.FC<LayoutProps> = ({ children, className }) =>
    (
        <div className={cn(styles.layout, className)}>
            <NavBar className={styles.nav} />
            <div className={styles.page}>
                {children}
            </div>
        </div>
    )


export { AuthLayout }
export type { LayoutProps }
