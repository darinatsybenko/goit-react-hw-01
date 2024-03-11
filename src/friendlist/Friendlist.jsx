import FriendListItem from "./FriendListItem";


const FriendList = ({ friends }) => {
    return (
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem {...FriendListItem} />
          </li>
        ))}
      </ul>
    );
  };

export default FriendList
