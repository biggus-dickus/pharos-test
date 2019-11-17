import React from 'react';

import Search from './search';
import UserSection from './user-section';


const Header = () => (
    <header className="app__header page-header">
        <Search />
        <UserSection />
    </header>
);

export default Header;
