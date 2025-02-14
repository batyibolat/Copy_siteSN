import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <a href="https://college.smartnation.kz">
        <img
          src="https://avatars.mds.yandex.net/i?id=7dd735128ff74be3c8ece96bc54ba1fcb9bcd5f4-5214808-images-thumbs&n=13"
          alt="Logo"
        />
      </a>
      <div>
        <button className="reg">Регистрация</button>
        <button className="log">Вход</button>
      </div>
    </header>
  );
};

export default Header;
