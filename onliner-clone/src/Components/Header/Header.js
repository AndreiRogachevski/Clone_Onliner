import '../../Style/header.css';
import ExchangeRate from './ExchangeRate';
import Weather from './Weather';

export default function Header() {
  return (
    <header className="header">
      <div className="header header__top">
        <nav>navigation</nav>
        <div className="header header__info-widget">
          <ExchangeRate />
          <Weather />
        </div>
      </div>
      <h1>"Offliner"</h1>
    </header>
  );
}
