import './Footer.css';
import tg_social from './links/tg.svg';
import gh_social from './links/gh.svg';

function Footer() {

 
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__element">
                <div className="fooer__elemet-social">
                    <ul className="links_social">
                        <li className="links_social-elem">
                            <a href="https://t.me/Alex_frilance" class="elem__link">
                                <img className="image_social" src={tg_social} alt=""/>
                            </a>
                        </li>
                        <li className="links_social-elem">
                            <a href="https://github.com/Alex-vvhite?tab=repositories" className="elem__link">
                                <img className="image_social" src={gh_social} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__elemet-about">
                    Собрано и создано собственно-ручками и собственно-ножками
                </div>
            </div>
        </div>
    </footer>
  );
  
}



export default Footer;