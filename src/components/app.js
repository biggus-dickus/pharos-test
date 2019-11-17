import React from 'react';
import {connect} from 'react-redux';

import {getMenuData} from '../store/reducers/data/selectors';

import {ReactComponent as SVGSprite} from '../img/svg/sprite-dest/sprite.svg';

import Header from './header/header';
import MainContent from './main/main-content';
import SideBar from './sidebar/sidebar';


const App = (props) => {
    const {menuData} = props;

    return (
        <div className="app">
            <SVGSprite />
            <SideBar {...menuData} />

            <div className="app__content">
                <Header />
                <MainContent sectionTitle="Promocodes" />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    menuData: getMenuData(state)
});

export default connect(mapStateToProps)(App);
