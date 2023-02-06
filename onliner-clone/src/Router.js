import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main';

export default function Router() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>

        </Route>
      </Routes>
    </div>
  );
}
