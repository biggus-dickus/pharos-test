import React from 'react';
import avatar from '../../img/avatar.jpg';


const UserSection = () => (
    <div className="page-header__user user-section">
        <button type="button" disabled className="header-btn user-section__item" title="No notifications">
            <svg className="header-btn__icon" aria-hidden="true">
                <use xlinkHref="#icon-bell" />
            </svg>
            <span className="visually-hidden">Your notifications</span>
        </button>

        <form action="?" method="post" className="user-section__item">
            <input type="file" name="file" className="visually-hidden user-section__upload" id="file-upload" />
            <label htmlFor="file-upload" className="header-btn" title="Choose file">
                <svg className="header-btn__icon" aria-hidden="true">
                    <use xlinkHref="#icon-upload" />
                </svg>
                <span className="visually-hidden">Choose file</span>
            </label>
        </form>

        <div className="user-section__item">
            <img src={avatar} alt="Your avatar" className="user-section__avatar"/>
        </div>
    </div>
);

export default UserSection;
