import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductsListPage from './pages/ProductsListPage';
import CartProductListPage from './pages/CartProductListPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<ProductsListPage />} />
        <Route path='/cart' element={<CartProductListPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
