import Section from './Section/Section';

import user from '../data/user.json';
import Profile from './Profile/Profile';

import statisticalData from '../data/statistical-data.json';
import Statistics from './Statistics/Statistics';

import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (
    <div>
      <Section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </Section>
      

      <Statistics title="Upload stats" stats={statisticalData}></Statistics>
      <Statistics stats={statisticalData} />
      
      <Section>
        <FriendList friends={friends} />
      </Section>

      <TransactionHistory items={transactions} />

    </div>
  );
};


/**export const App = () => {
//  return (
  //  <div
    //  style={{
      //  height: '100vh',
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        //fontSize: 40,
        //color: '#010101'
      //}}
    //>
      //React homework template
    //</div>
  //);
//}; */
