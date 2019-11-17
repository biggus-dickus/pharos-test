import React from 'react';


const Search = () => (
    <form action="?" method="get" className="page-header__search search">
        <svg className="search__icon" aria-hidden="true">
            <use xlinkHref="#icon-search" />
        </svg>
        <input type="search" name="search-query" className="search__input" placeholder="Search videos, shows and people" />
    </form>
);

export default Search;
