import './App.css';
import { Filter } from './components/Filter/filter';
import { Header } from './components/Header/header';
import { ProductList } from './components/ProductList/productList';
import { SearchResultHeader } from './components/SearchResultHeader/searchResultHeader';

function App() {

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
