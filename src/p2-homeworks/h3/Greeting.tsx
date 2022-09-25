 import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
 import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
 import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) =>void // need to fix any
    addUser: ()=> void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputError = error === 'warning error' ? 'error' : '' // need to fix with (?:)

    return (
        <div style={{marginLeft: '20px'}}>
            <SuperInputText value={name} onChange={setNameCallback} error={inputError}/>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            {/*<span>{inputError}</span>*/}
            <SuperButton onClick={addUser} style={{margin: '20px'}}>All</SuperButton>
            {/*<button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
