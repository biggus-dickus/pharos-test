import React from 'react';
import PropTypes from 'prop-types';


const PromoTable = (props) => {
    const {items, isActive, onCopy} = props;
    const tableRef = React.createRef();

    const modifier = isActive ? 'promo-table__table--active' : 'promo-table__table--inactive';

    const copyHandler = (str, e) => {
        onCopy(str);
        const buttons = tableRef.current.querySelectorAll(`.${e.target.className}`);

        for (const btn of buttons) {
            btn.textContent = 'Copy';
        }

        e.target.textContent = 'Copied';
    };

    return (
        <div className="table-responsive">
            <table className={`table promo-table__table ${modifier}`} ref={tableRef}>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="promo-table__td promo-table__td--label" aria-hidden="true">
                                <span style={item.color ? {backgroundColor: item.color} : null}/>
                            </td>

                            <td className="promo-table__td promo-table__td--name">
                                {item.name}
                            </td>

                            <td className="promo-table__td promo-table__td--url">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.url}
                                </a>
                            </td>

                            {isActive && (
                                <td className="promo-table__td promo-table__td--copy">
                                    <button type="button"
                                        className="promo-table__copy"
                                        onClick={copyHandler.bind(null, item.url)}>
                                        Copy
                                    </button>
                                </td>
                            )}

                            <td className="promo-table__td promo-table__td--status">{isActive ? 'Active' : 'Inactive'}</td>

                            <td className="promo-table__td promo-table__td--subscriptions">
                                {new Intl.NumberFormat('en').format(item.subscriptions)} subscriptions
                            </td>

                            <td className="promo-table__td promo-table__td--watch">
                                <button type="button" className="promo-table__watch" disabled={!item.desktopUrl} title="Watch on TV">
                                    <svg className="promo-table__watch-icon" aria-hidden="true">
                                        <use xlinkHref="#icon-desktop"/>
                                    </svg>
                                    <span className="visually-hidden">
                                        Watch on TV
                                    </span>
                                </button>
                            </td>

                            <td className="promo-table__td promo-table__td--watch">
                                <button type="button" className="promo-table__watch" disabled={!item.mobileUrl} title="Watch on smartphone">
                                    <svg className="promo-table__watch-icon" aria-hidden="true">
                                        <use xlinkHref="#icon-mobile"/>
                                    </svg>
                                    <span className="visually-hidden">
                                        Watch on smartphone
                                    </span>
                                </button>
                            </td>

                            <td className="promo-table__td promo-table__td--actions">
                                <button type="button" className="promo-table__actions" title="More actions">
                                    <span className="visually-hidden">
                                        More actions
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

PromoTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        subscriptions: PropTypes.number.isRequired,
        desktopUrl: PropTypes.string,
        mobileUrl: PropTypes.string,
        color: PropTypes.string
    })).isRequired,
    isActive: PropTypes.bool.isRequired,
    onCopy: PropTypes.func
};

export default PromoTable;
