import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar=props=>(
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton clicked={props.drawerClickedHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">VOUCHERZ</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Create</a></li>
                    <li><a href="/">Bulk</a></li> 
                </ul>
            </div>
        </nav>
    </header>
);
export default toolbar;