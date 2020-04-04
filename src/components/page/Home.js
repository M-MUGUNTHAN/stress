import React, { useEffect, useState } from 'react';
import Button from '../atom/Button';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Home = (props) => {
    const feed="https://api.thingspeak.com/channels/1014837/feeds.json?api_key=EAC7A9VU23RFGJJB&results=1";
    const field="https://api.thingspeak.com/channels/1014837/fields/1.json?api_key=EAC7A9VU23RFGJJB&results=2";
    const ststus="https://api.thingspeak.com/channels/1014837/status.json?api_key=EAC7A9VU23RFGJJB";
    const initialState={
        attention:null,
        meditation:null,
        entry_id:null,
    }
    const [state,setState]=useState(initialState);
    const getNewData=()=>{
        fetch(feed)
        .then(response=>response.json())
        .then(result=>{
            const data=result.feeds[0];
            console.log(data);
            if(state.entry_id!==data.entry_id){
             setState(pre=>({...pre,attention:data.field1,meditation:data.field2,entry_id:data.entry_id}))
            }
            else{
                alert("No New Updates");
            }
        })
    }
    useEffect(()=>{
    getNewData();
    },[])
    return (
        <div style={{textAlign:'center'}}>
           <h1 style={{textAlign:'center'}}>Find Your Stress Level</h1>
           <CircularProgressbar value={100-state.meditation} text={`${(100-state.meditation)||0}%`}/>
           {
               state.attention!==null||state.meditation!==null?
               <div style={{textAlign:'center'}}>
               <h3 style={{margin:0}}>Attention - {state.attention}</h3>
               <h3 style={{margin:0}}>Meditation - {state.meditation}</h3>
               </div>:null
           }
           <h2 style={{margin:0}}>Concentration is <span style={{color:'green'}}>Normal</span></h2>
           <h2 style={{margin:0}}>Stress is <span style={{color:"#f78259"}}>High</span></h2>
           <a href="https://www.youtube.com/watch?v=lFcSrYw-ARY">Click the link to reduce Stress</a>
           <Button title="Reload" onClick={getNewData}/>
        </div>
    )
}

export default Home;
