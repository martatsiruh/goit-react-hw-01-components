import Section from './Section/Section';

import user from '../data/user.json';
import Profile from './Profile/Profile';

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
