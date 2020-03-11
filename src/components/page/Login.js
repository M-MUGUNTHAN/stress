import React,{useState} from 'react';
import styles from "./style/Login.module.scss";
import TextInput from '../atom/TextInput';
import Button from '../atom/Button';

const Login=(props)=> {
    const initialState={
        username:"",
        password:"",
        isAdmin:false,
    }
    const [state, setState] = useState(initialState)
    const handleLogin=()=>{
        if(state.username==="1234" && state.password==="1234"){
          setState(pre=>({...pre,isAdmin:true}))
          props.history.push("/home");
        }
        else{
            setState(pre=>({...pre,isAdmin:false}))
        }
    }
    return (
        <div className={styles.Container}>
            <TextInput 
            className={styles.TextInput}
             value={state.username}
             onChange={(text)=>setState(pre=>({...pre,username:text}))}
             placeholder="Username"
             />
            <TextInput   
             className={styles.TextInput}
             value={state.password} 
             onChange={(text)=>setState(pre=>({...pre,password:text}))}
             placeholder="Password"
             />
            <Button title="LOGIN" onClick={handleLogin}/>
            {
                state.isAdmin?
                <div>Welcome</div>
                :
                null
            }
        </div>
    )
}
export default Login;