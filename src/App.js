import './App.css';
import './index.css';
import Header from './components/Home/Header';
import Landing from './components/Home/Landing';
import Profile from './components/Profile/Profile';
import Item from './components/Create/Item';
import Collection from './components/Create/Collection';

const App = () => {

  return (
    <>
      <Header/>
      <Profile/>
      <Landing/>
      <Item/>
      <Collection/>
    </>
  );
}

export default App;
