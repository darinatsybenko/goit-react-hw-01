import userData from "./components/profile/userData.json"
import Profile from "./components/profile/Profile"
import TransactionHistory from "./components/transactionhistory/TransactionHistory"
import friends from "./components/friendlist/friends.json"
import transactions from "./components/transactionhistory/transactions.json"
import FriendList from "./components/friendlist/Friendlist"


function App() {
  return (
 <>
 <Profile 
 name={userData.username}
 tag={userData.tag}
 location={userData.location}
 image={userData.avatar}
 stats={userData.stats}
 />
 <FriendList friends={friends}/>
 <TransactionHistory items={transactions}/>
 </>
  );
}

export default App
