
import propTypes from 'prop-types';
import { FriendListItem } from './Friend';
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map (({ id, isOnline, avatar, name } ) => (
                    <FriendListItem 
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                     />
                ))
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.exact({
        id: propTypes.number,
        isOnline: propTypes.bool,
        avatar: propTypes.string,
        name: propTypes.string,
    }),
    )
}
