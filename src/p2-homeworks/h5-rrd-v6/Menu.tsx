 import React from 'react';
import './Menu.css'
 import {NavLink} from "react-router-dom";
 import {PATH} from "./Pages";

 type MenuPropsType = {
     active: boolean
     setActive: (active: boolean)=> void
 }

const Menu = (props:MenuPropsType) => {
    return (
        <div className={props.active ? 'menu active':'menu'} onClick={()=> props.setActive(false)}>
            <div className="blur"></div>
            <div className="menu__content" onClick={(e)=> e.stopPropagation()}>
                <div className="menu__header">Links</div>
                <ul>
                    <li><NavLink to={PATH.PRE_JUNIOR} className={'NavLink'}>PreJunior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR} className={'NavLink'}>Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR_PLUS} className={'NavLink'}>Junior+</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;