import userData from "../src/profile/userData.json"
import Friendlist from "./friendlist/Friendlist"
import Profile from "./profile/Profile"
import TransactionHistory from "./transactionhistory/TransactionHistory"
import friends from "./friendlist/friends.json"

function App() {
  return (
 <>
 <Profile 
 name={userData.username}
 tag={userData.tag}
 location={userData.location}
 avatar={userData.avatar}
 stats={userData.stats}
 />
 <Friendlist friends={friends}/>
 <TransactionHistory/>
 </>
  );
}

export default App
