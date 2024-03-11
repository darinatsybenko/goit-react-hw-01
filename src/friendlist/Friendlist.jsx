

const FriendList = ({ friends }) => {
    return (
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendList {...friend} />
          </li>
        ))}
      </ul>
    );
  };

export default FriendList
