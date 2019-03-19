import React from 'react'
import styles from './PageTemplate.scss'
import classnames from 'classnames'


const PageTemplate = ({children}) => {
    return (
        <div className={classnames('page-template')}>
            <h1>일정 관리</h1>
            <div className={classnames('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate