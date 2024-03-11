import userData from "../src/profile/userData.json"
import Friendlist from "./friendlist/Friendlist"
import Profile from "./profile/Profile"
import TransactionHistory from "./transactionhistory/TransactionHistory"
import friends from "./friendlist/friends.json"
import FriendListItem from "./friendlist/FriendListItem"
import transactions from "./transactionhistory/transactions.json"


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
 <Friendlist friends={friends}/>
 <FriendListItem/>
 <TransactionHistory items={transactions}/>
 </>
  );
}

export default App
