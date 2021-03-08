import logo from './logo.svg';
import './App.css';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Icon } from 'react-native-elements'

function App() {
  return (

    <div className="App">
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: 'Dashboard',
            itemId: '/dashboard',
            // you can use your own custom Icon component as well
            // icon is optional
            elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: 'Management',
            itemId: '/management',
            elemBefore: () => <Icon name="users" />,
            subNav: [
              {
                title: 'Projects',
                itemId: '/management/projects',
              },
              {
                title: 'Members',
                itemId: '/management/members',
              },
            ],
          },
          {
            title: 'Another Item',
            itemId: '/another',
            subNav: [
              {
                title: 'Teams',
                itemId: '/management/teams',
              },
            ],
          },
        ]}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
