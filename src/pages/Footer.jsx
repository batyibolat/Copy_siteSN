import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        ТОО «InCraft»<br />Контакты: <br />
        <span>+7 727 339 72 22</span><br />
        <span>+7 747 339 72 22</span>
      </p>
      <p>&copy; 2025 College - SmartNation. Все права защищены.</p>
      <div className="social">
        <a href="https://www.instagram.com/smartnation_kz/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/414/683/original/instagram-black-logo-on-transparent-background-free-vector.jpg"
            alt="Instagram"
          />
        </a>
        <a href="https://www.facebook.com/SmartNationkz/">
          <img
            src="https://avatars.mds.yandex.net/i?id=660932adb07972f5a919aa6f9e7df2402c5fe1ac-4034676-images-thumbs&n=13"
            alt="Facebook"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;