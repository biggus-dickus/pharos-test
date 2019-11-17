import React from 'react';
import PropTypes from 'prop-types';

import PromoCodesSection from '../promo-codes/promo-codes';


const MainContent = ({sectionTitle}) => (
    <main className="app__main page-main">
        <h1 className="main-title page-main__title">{sectionTitle}</h1>

        <PromoCodesSection />
    </main>
);

MainContent.propTypes = {
    sectionTitle: PropTypes.string.isRequired
};

export default MainContent;
