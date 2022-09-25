import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        console.log(props.deleteAffairCallback(props.affair._id))
        return props.affair._id}// need to fix

    return (
        <div>
            <span style={{fontSize: '2rem', paddingRight: '10px', marginLeft: '20px'}}>{props.affair.name}</span>
            <SuperButton onClick={deleteCallback} style={{marginBottom: '10px'}}>X</SuperButton>
            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    )
}

export default Affair
