import { Cards } from "./Card-task/Card";
import { Statistics } from "./Statistic-task/Statistics";
import { FriendList } from "./Friend-task/FriendList";
import { TransactionHistory } from "./Transaction-task/TransactionHistory";
import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";
export const App = () => {
  return (
    <>
      <Cards
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};