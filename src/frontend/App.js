import './App.css';
import './index.css';
import '../components/Navbar' 
import Navbar  from '../components/Navbar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
        <Landing/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
