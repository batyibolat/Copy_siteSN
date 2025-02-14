import React from "react";
import "./styles.css";

const Main = () => {
  return (
    <main className="main">
      <h1>Единый портал государственных услуг</h1>
      <p>
        College SmartNation - единый портал для получения государственных услуг в
        сфере технического и профессионального образования, общедоступный реестр
        колледжей и система управления колледжем.
      </p>

      <div className="img_sn">
        <img
          src="https://avatars.mds.yandex.net/i?id=5a67778db940cd25985b98cb6bcea5d8e3f2cf06-4011431-images-thumbs&n=13"
          alt="Картинка 1"
        />
        <a href="https://college.smartnation.kz">Перейти</a>
        <img
          src="https://avatars.mds.yandex.net/i?id=4b624e8d5951c956c5600bd2e4a37019f61d961a-4078232-images-thumbs&n=13"
          alt="Картинка 2"
        />
      </div>

      <div>
        <button className="seats">Места по госзаказу</button>
        <button className="search">Поиск заявки</button>
      </div>
    </main>
  );
};

export default Main;