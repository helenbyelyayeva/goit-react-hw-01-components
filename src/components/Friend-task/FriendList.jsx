
import propTypes from 'prop-types';
import { FriendListItem } from './Friend';
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {
                friends.map(friend => (
                    <li className={css.item} key={friend.id}>
                    <FriendListItem friend={friend} />
                    </li>
                ))
            }
        </ul>
    )
}

FriendList.propTypes = {
    id: propTypes.number,
}
