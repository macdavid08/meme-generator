import './App.css';
import './component/Header'
import Header from './component/Header';
import Hero from './component/Hero';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <footer><p>&copy; WebDevMac</p></footer>
    </div>
  );
}

export default App;
