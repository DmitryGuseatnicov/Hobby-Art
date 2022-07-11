import React from 'react';

import { Button, Input, Logo } from 'shared/ui';
import './Footer.scss';

const phone = require('../assets/img/icon-place.png');
const instagram = require('../assets/img/icon-instagram.png');
const place = require('../assets/img/icon-place.png');
const time = require('../assets/img/icon-time.png');

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__item">
            <div className="footer__contacts">
              <div className="footer__contacts-logo">
                <Logo />
              </div>
              <ul className="footer__contacts-inner">
                <li className="footer__contacts-item">
                  <div className="footer__contacts-icon">
                    <img src={phone} alt="phone" />
                  </div>
                  <div className="footer__contacts-info">
                    <a href="tel:+79247652820" className="footer__contacts-link">
                      +7 (924) 765 28 20
                    </a>
                  </div>
                </li>
                <li className="footer__contacts-item">
                  <div className="footer__contacts-icon">
                    <img src={place} alt="place" />
                  </div>
                  <div className="footer__contacts-info">
                    г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”
                  </div>
                </li>
                <li className="footer__contacts-item">
                  <div className="footer__contacts-icon">
                    <img src={time} alt="time" />
                  </div>
                  <div className="footer__contacts-info">Ежедневно с 10:00 до 19:00</div>
                </li>
                <li className="footer__contacts-item">
                  <div className="footer__contacts-icon">
                    <img src={instagram} alt="" />
                  </div>
                  <div className="footer__contacts-info">
                    <a className="footer__contacts-link" href="https://www.instagram.com">
                      @hobbyart_dv
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__special">
              <h4 className="footer__special-title">Узнавайте первым о новинках и новостях</h4>
              <form className="footer__subscribe-form">
                <div className="footer__subscribe-input">
                  <Input type="email" placeholder="Ваш Email" />
                </div>
                <div className="footer__subscribe-button">
                  <Button modification="pink" height="standard">
                    подписаться
                  </Button>
                </div>
                <p className="footer__subscribe-description">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
              <p className="footer__copy-right">
                © 2012-2021 ХОББИ АРТ — официальный интернет-магазин товаров для хобби. Все права
                защищены. Условия использования и политика конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
