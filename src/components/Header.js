import author from './author.jpg';
import logo from './logo.webp';
import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  
  useEffect(()=>{
    const burgerMenu = document.querySelector('.burger_menu');
    const headerMenu = document.querySelector('.header_menu');

    const toggleMenu = () => {
      headerMenu.classList.toggle("active");
      burgerMenu.classList.toggle("open");
    };

    burgerMenu.addEventListener("click", toggleMenu);
  return () => {
    burgerMenu.removeEventListener("click", toggleMenu); // Убираем обработчик при размонтировании
  };  

},[]);
 
  return (
    <header className="header">
      <div className="container">
      <div className="haeder_logo">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="burger_menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="header_menu">
                    <li className="header_items"><a href="" className="header_link">Мои работы</a></li>
                    <li className="header_items"><a href="" className="header_link">Мои увлечения</a></li>
                    <li className="header_items"><a href="" className="header_link">Образование</a></li>
                </ul>
        </div>
      </div>

        
        <h1 className="Name_header">Ходырев Алексей</h1>
        <p className="Text_header">Frontend Developer</p>
        <div className="header_logo">
          <img src={author} className="App-author" alt="author"/>
        </div>    
    </header>
  );
  
}



export default Header;