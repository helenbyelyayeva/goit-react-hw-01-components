import propTypes from 'prop-types';
import css from "./Transaction.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.head}>
                <tr className={css.tr}>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tbody}>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className={css.body} key={id}>
                            <td className={css.td}>{type}</td>
                            <td className={css.td}>{amount}</td>
                            <td className={css.td}>{currency}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.string,
                type: propTypes.string,
                amount: propTypes.string,
                currency: propTypes.string,
            }
        ))
}