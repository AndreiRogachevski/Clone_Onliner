import { useEffect, useState } from 'react';
import '../../Style/header.css';
import ExchangeRate from './ExchangeRate';
import Weather from './Weather';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectUser, setUser } from '../../features/user/userSlice';

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
  }, [dispatch]);
  console.log(user);
  return (
    <header className="header">
      <div className="header header__top">
        <nav>navigation</nav>
        <div className="header header__info-widget">
          <ExchangeRate />
          <Weather />
        </div>
      </div>
      <div className="header header__bottom">
        <h1>Offliner</h1>
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {user ? (
          <img
            src={user.image}
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
          />
        ) : (
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Вход
          </button>
        )}
        <button>
          <i className="bi bi-cart3"></i>
        </button>
      </div>
    </header>
  );
}
