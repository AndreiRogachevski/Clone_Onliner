import { Outlet } from 'react-router-dom';
import Catalog from './products/Catalog';

export default function Main() {
  return (
    <main>
      <Catalog />
      <Outlet />
    </main>
  );
}
