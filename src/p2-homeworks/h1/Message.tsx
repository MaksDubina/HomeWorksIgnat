import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={classes.container} >

            <img src={props.avatar} alt="Avatar" className={classes.avatar}/>
            <div className={classes.triangle}></div>
            <div className={classes.message}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.content}>
                    <div>{props.message}</div>
                    <div>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
