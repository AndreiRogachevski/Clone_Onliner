import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <div>
        <h1>Main</h1>
        <Outlet />
      </div>
    </main>
  );
}
