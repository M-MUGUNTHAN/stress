import React, { useEffect, useState } from 'react';
import Button from '../atom/Button';

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
        <div>
           <h1>Find Your Stress Level</h1>
           {
               state.attention!==null||state.meditation!==null?
               <>
               <div>Attention - {state.attention}</div>
               <div>Meditation - {state.meditation}</div>
               </>:null
           }
           <Button title="Reload" onClick={getNewData}/>
        </div>
    )
}

export default Home;
