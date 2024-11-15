import React,{useState, useEffect} from 'react';

const HookRules = () => {

    const [condition, setCondition] = useState(true);

    if(condition){
        // won't work
        const [state, setState] = useState(false);
    }

    // if (condition){
    //     return <h2>Hello There</h2>
    // }

    // // this will also fail

    // useEffect(()=>{
    //     console.log('Hello There');
    // },[])
    return <h2>example</h2>
}

export default HookRules;