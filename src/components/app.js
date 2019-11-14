import React from 'react';

import logo from '../img/logo.png';
import {ReactComponent as SVGSprite} from '../img/svg/sprite-dest/sprite.svg';

function App() {
    return (
        <div className="app">
            <SVGSprite />

            <aside className="app__sidebar sidebar">
                <b className="sidebar__logo">
                    <img src={logo} alt="logo" />
                    Pulse.Studio
                </b>
                <h2 className="sidebar__title sidebar__menu-title">
                    <svg className="sidebar__icon">
                        <use xlinkHref="#icon-folder" />
                    </svg>
                    Dashboard
                </h2>

                <nav className="sidebar__navigation"></nav>

                <div className="sidebar__footer">
                    <p className="sidebar__text">
                        {new Date().getFullYear()} &#0169; HeartBit. All rights reserved.
                    </p>

                    <p className="sidebar__text">
                        <a className="sidebar__link" href="/terms">Terms of use</a> and <a className="sidebar__link" href="/privacy">Privacy Policy</a>.
                    </p>
                </div>
            </aside>

            <div className="app__content">
                <header className="app__header page-header"></header>
                <main className="app__main page-main">

                </main>
            </div>
        </div>
    );
}

export default App;
