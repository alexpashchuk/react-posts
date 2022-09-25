import React from 'react'
import classes from './MyModal.module.css'
import classNames from 'clsx'

const MyModal = ({ children, visible, setVisible }) => {
    // const rootClasses = [classes.myModal]
    // if (visible) {
    //     rootClasses.push(classes.active)
    // }
    // <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>

    return (
        <div className={classNames(classes.myModal, visible && classes.active)} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal
