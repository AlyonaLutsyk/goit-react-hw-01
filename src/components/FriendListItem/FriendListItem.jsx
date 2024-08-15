import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const statusClsx = clsx(styles.status, {
    [styles.online]: isOnline,
    [styles.offline]: !isOnline,
  });
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt={`${name} avatar`}  />
      <p className={styles.name}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
