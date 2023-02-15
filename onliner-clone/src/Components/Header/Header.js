import { useState } from 'react';
import '../../Style/header.css';
import ExchangeRate from './ExchangeRate';
import Weather from './Weather';

export default function Header() {
  const [search, setSearch] = useState('');
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
        <button>Вход</button>
        <button>
          <i className="bi bi-cart3"></i>
        </button>
      </div>
    </header>
  );
}
