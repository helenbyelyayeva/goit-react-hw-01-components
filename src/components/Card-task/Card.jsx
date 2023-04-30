import propTypes from 'prop-types'; 
import css from "./Card.module.css";
export const Cards =({username, tag, location, avatar, followers, views, likes}) => {
  return (
    <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
      />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.stat}>
        <span className={css.label}>Followers</span>
        <span className={css.value}>{followers}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Views</span>
        <span className={css.value}>{views}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Likes</span>
        <span className={css.value}>{likes}</span>
      </li>
    </ul>
  </div>
  
  );
};


Cards.propTypes = {
username: propTypes.string.isRequired,
tag: propTypes.string.isRequired,
location: propTypes.string.isRequired,
avatar: propTypes.string.isRequired,
stats: propTypes.exact({
    label: propTypes.string.isRequired,
    quantity: propTypes.number.isRequired,
})

}
