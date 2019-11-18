import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchPromoCodes} from '../../store/actions/get-data';
import {getPromoCodesData} from '../../store/reducers/data/selectors';

import PromoTable from './promo-table';


class PromoCodesSection extends React.PureComponent {
    createPromoCode () {
        return null;
    }

    handleCopy (val) {
        const el = document.createElement('textarea');
        el.value = val;
        el.readOnly = true;
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);

        const selected = document.getSelection().rangeCount > 0 ?
            document.getSelection().getRangeAt(0) : false;

        el.select();

        document.execCommand('copy');
        document.body.removeChild(el);

        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }

    componentDidMount() {
        this.props.onMount();
    }

    render () {
        const {isFetching, error, items} = this.props.promoCodesData;

        let activeItems = [];
        let inactiveItems = [];

        if (Array.isArray(items) && items.length) {
            activeItems = items.filter((it) => it.isActive);
            inactiveItems = items.filter((it) => !it.isActive);
        }

        return (
            <div className="promo-table">
                <button type="button" className="promo-table__btn" onClick={this.createPromoCode}>Create promocode</button>

                {isFetching && <p>Loading promocodes&hellip;</p>}

                {error && <p>Failed to load promocodes: {error}</p>}

                {/* Active codes table */}
                {activeItems.length ?
                    <PromoTable
                        items={activeItems}
                        isActive
                        onCopy={this.handleCopy} /> : null}

                {/* Inactive codes table */}
                {activeItems.length ?
                    <PromoTable
                        items={inactiveItems}
                        isActive={false} /> : null}
            </div>
        );
    }
}

PromoCodesSection.propTypes = {
    onMount: PropTypes.func.isRequired,
    promoCodesData: PropTypes.shape({
        isFetching: PropTypes.bool,
        error: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
};

const mapStateToProps = (state) => ({
    promoCodesData: getPromoCodesData(state)
});

const mapDispatchToProps = (dispatch) => ({
    onMount: () => dispatch(fetchPromoCodes())
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoCodesSection);
