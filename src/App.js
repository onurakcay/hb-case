import './App.css';
import { Filter } from './components/Filter/filter';
import { Header } from './components/Header/header';
import { Modal } from './components/Modal/modal';
import { ProductList } from './components/ProductList/productList';
import { SearchResultHeader } from './components/SearchResultHeader/searchResultHeader';
import data from './data/data.json';

function App() {
  localStorage.setItem('productData', JSON.stringify(data));
  return (
    <div>
      <Header />
      <div className="container">
        <SearchResultHeader />
        <div className="content">
          <Filter />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
