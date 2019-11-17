import React from 'react';
import PropTypes from 'prop-types';


const NavMenu = ({items: data, error, isFetching, onAddClick}) => {
    let navContent = null;

    if (isFetching) {
        navContent = <p>Loading&hellip;</p>;
    }

    if (error) {
        navContent = <p>Failed to load menu: {error}. Try refreshing the page.</p>;
    }

    if (data.length) {
        navContent = (
            <ul className="reset-list sidebar-menu">
                {data.map((item) => {
                    const hasNestedItems = item.items && item.items.length;

                    return  (
                        // Outer list
                        <li key={item.id}
                            className="sidebar__menu-title sidebar-menu__outer-item">
                            <a className={`sidebar-menu__outer-link sidebar-menu__outer-link--${item.id}`}
                                href={item.pageUrl}>
                                {item.iconId && (
                                    <svg aria-hidden="true" className="sidebar__icon">
                                        <use xlinkHref={`#icon-${item.iconId}`} />
                                    </svg>
                                )}
                                {item.title}
                            </a>

                            {/* "Add new" button */}
                            {hasNestedItems && (
                                <button className="sidebar-menu__btn" type="button" onClick={onAddClick} title="Add new">
                                    <span className="visually-hidden">Add new</span>
                                </button>
                            )}

                            {/* Nested list */}
                            {hasNestedItems ? (
                                <ul className="reset-list sidebar-menu__inner-list">
                                    {item.items.map((it) => {
                                        const classList = it.isLive ? ['sidebar-menu__inner-item', 'sidebar-menu__inner-item--active'] : ['sidebar-menu__inner-item'];

                                        return (
                                            <li key={it.id}
                                                className={classList.join(' ')}>
                                                <a className="sidebar-menu__inner-link"
                                                    href={`${item.pageUrl}/${it.id}`}>
                                                    {it.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : null}
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <nav className="sidebar__navigation">
            {navContent}
        </nav>
    );
};

NavMenu.propTypes = {
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddClick: PropTypes.func.isRequired
};

export default NavMenu;
