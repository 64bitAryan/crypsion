import './App.css';
import './index.css';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Home/Header';
import Landing from './components/Home/Landing';
import Collection from './components/Create/Collection';

const App = () => {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/collection' element={<Collection/>} />
      </Routes>
    </>
  );
}

export default App;
