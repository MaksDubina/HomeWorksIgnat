import React, {useState} from 'react'
import './Header.css'
import Menu from "./Menu";


function Header() {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div>

            <nav >
                <div className={'burger_btn'} onClick={()=> setMenuActive(!menuActive)}>
                    <span/>
                </div>
            </nav>

            {/*<main>*/}

            {/*</main>*/}
            <Menu active={menuActive} setActive={setMenuActive}/>

        </div>
    )
}

export default Header
