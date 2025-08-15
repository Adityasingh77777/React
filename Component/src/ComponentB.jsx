import React, {useContext} from 'react'
import ComponentC from './ComponentC.jsx';

function ComponentB(props){
    return (
        <div className="box">
        <h1>ComponentB</h1>
        <ComponentC user={props.user}/>
        </div>
    );
}

export default ComponentB
