import { Route, Routes } from 'react-router-dom';
import Login from './Components/Header/Login';
import Main from './Components/Main';
import Catalog from './Components/products/Catalog';
import './Style/style.css';

export default function Router() {
  return (
    <div className="background-gradient">
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />}>
            <Route index element={<Catalog />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
