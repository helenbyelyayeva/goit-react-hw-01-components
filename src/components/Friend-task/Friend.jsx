import propTypes from 'prop-types';
import css from "./Friend.module.css";
export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
    if (isOnline === true) {
        return (
            <>
                <span className={css.online}></span>
                <img
                    src={avatar}
                    alt={name}
                    className={css.avatar}
                />
                <p className={css.username}>{name}</p>
            </>
        )
    } else return (
        <>
            <span className={css.offline}></span>
            <img
                src={avatar}
                alt={name}
                className={css.avatar}

            />
            <p className={css.username}>{name}</p>
        </>
    )

}

FriendListItem.propTypes = {
    friend: propTypes.shape({
        isOnline: propTypes.bool,
        avatar: propTypes.string,
        name: propTypes.string,
    })
}
