import { Cards } from "./Card-task/Card";
import { Statistics } from "./Statistic-task/Statistics";
import user from "user.json";
import data from "data.json";
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
      <Statistics stats={data}/>
    </>
  );
};