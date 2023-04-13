import './App.css';
import Blog from './Blog';
import Choose from './Choose';
import Choosen2 from './Choose2';
import Footer from './Footer';
import Front from './Front';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Front />
      <Choose />
      <Choosen2 />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
