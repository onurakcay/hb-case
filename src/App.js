import './App.css';
import { Filter } from './components/Filter/filter';
import { Header } from './components/Header/header';
import { Modal } from './components/Modal/modal';
import { ProductList } from './components/ProductList/productList';
import { SearchResultHeader } from './components/SearchResultHeader/searchResultHeader';

function App() {
  return (
    <div>
    <Header/>
    <div className='container'>
      <SearchResultHeader/>
      <div className='content'>
        <Filter/>
        <ProductList/>
      </div>
    </div>
    <Modal/>
    </div>
  );
}

export default App;
