import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}