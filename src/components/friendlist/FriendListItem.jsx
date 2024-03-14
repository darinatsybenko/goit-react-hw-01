import css from "./FriendListItem.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <div className={css.listItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
  <p style={{ color: statusColor }}>{statusText}{isOnline}</p>
    </div>
  )
}

export default FriendListItem

