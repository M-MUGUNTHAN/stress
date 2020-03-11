import React from 'react';
import styles from './style/TextInput.module.scss';

const TextInput=props=>{
    return(
        <input 
         className={props.className?`${styles.TextInput} ${props.className}`:styles.TextInput}
         value={props.value} 
         onChange={({target:{value}})=>props.onChange(value)}
         placeholder={props.placeholder}
         />
    );
}
export default TextInput;