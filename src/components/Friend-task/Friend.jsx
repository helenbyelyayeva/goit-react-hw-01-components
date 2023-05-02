import propTypes from 'prop-types';
import css from "./Friend.module.css";
export const FriendListItem = ({ id, isOnline, avatar, name } ) => {
    return (
           <li className={css.item} key={id}>
            {isOnline === true ? (
                <span className={css.online}></span>) : <span className={css.offline}></span>}
            <img
                src={avatar}
                alt={name}
                className={css.avatar}
            />
            <p className={css.username}>{name}</p>
            </li>
    )
}


FriendListItem.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.exact({
        id: propTypes.number,
        isOnline: propTypes.bool,
        avatar: propTypes.string,
        name: propTypes.string,
    }),
    )
}
