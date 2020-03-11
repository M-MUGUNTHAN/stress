import React from 'react'
import styles from './style/Button.module.scss';

const Button = (props) => {
    return (
       <button 
       className={props.className?`${styles.Button} ${props.className}`:styles.Button}
       onClick={props.onClick}
       >
           {props.title}
       </button>
    )
}

export default Button
