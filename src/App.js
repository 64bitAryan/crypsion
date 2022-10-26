import './App.css';
import './index.css';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Home/Header';
import Landing from './components/Home/Landing';
import Create from './components/Create/Create';
import Collection from './components/Create/collection/Collection';
import Item from './components/Create/item/Item';

const App = () => {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='create' element={<Create/>}>
            <Route path={'collection'} element={<Collection/>}/>
            <Route path='item' element={<Item/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
