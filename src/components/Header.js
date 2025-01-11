import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Jenny Gonçalves</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
