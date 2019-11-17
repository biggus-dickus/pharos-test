import React from 'react';

import logo from '../../img/logo.png';
import NavMenu from './nav-menu';


const SideBar = (props) => (
    <aside className="app__sidebar sidebar">
        <b className="sidebar__logo">
            <img src={logo} width="22" height="20" alt="logo" />
            Pulse.Studio
        </b>
        <h2 className="sidebar__title sidebar__menu-title">
            <svg className="sidebar__icon" aria-hidden="true">
                <use xlinkHref="#icon-desktop" />
            </svg>
            Dashboard
        </h2>

        <NavMenu {...props} onAddClick={() => null} />

        <div className="sidebar__footer">
            <p className="sidebar__text">
                {new Date().getFullYear()} &#0169; HeartBit. All rights reserved.
            </p>

            <p className="sidebar__text">
                <a className="sidebar__link" href="/tos">Terms of use</a> and <a className="sidebar__link" href="/privacy">Privacy Policy</a>.
            </p>
        </div>
    </aside>
);

export default SideBar;
