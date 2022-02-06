import './App.css';
import { Catalog, About, Footer, Header, News, Partners, Products } from './containers';
import Navbar from './components/navbar/Navbar'
import Searchbar from './components/searchbar/Searchbar'

function App() {
  return (
    <div className='usta__app'>
      <Navbar />
      <Header />  
      <Catalog />
      <Products />
      {/* <About />
      <News />
      <Partners />
      <Footer /> */}
    </div>
  );
}

export default App;
