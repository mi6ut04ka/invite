import React from 'react';
import '../style/style-dress.css'; // Подключаем стили

const DressSection: React.FC = () => {
  return (
    <section className="dress">
      <div className="dress-subtitle">
        <img src="img/dresscode.svg" alt="Dress code" />
      </div>
      <div className="dress-descr">
        Для нас главное - ваше присутствие! Но мы будем рады если вы поддержите цветовую гамму нашей свадьбы 
        <br /><span>(соблюдение дресс-кода желательно, но не обязательно)</span>
      </div>
      <div className="dress-color-block">
        <div className="dress-color dress-color-1"></div>
        <div className="dress-color dress-color-2"></div>
        <div className="dress-color dress-color-3"></div>
        <div className="dress-color dress-color-4"></div>
        <div className="dress-color dress-color-5"></div>
        <div className="dress-color dress-color-6"></div>
      </div>
      <div className="dress-photos">
        <img src="img/dress-1.jpg" alt="Dress 1" className="dress-photo-1" />
        <img src="img/dress-2.jpg" alt="Dress 2" className="dress-photo-2" />
        <img src="img/dress-3.jpg" alt="Dress 3" className="dress-photo-3" />
        <img src="img/dress-4.jpg" alt="Dress 4" className="dress-photo-4" />
        <img src="img/dress-5.jpg" alt="Dress 5" className="dress-photo-5" />
        <img src="img/dress-6.jpg" alt="Dress 6" className="dress-photo-6" />
      </div>
      <div className="dress-info-block">
        <div className="dress-sign">!</div>
        <div className="dress-info-text">Просим Вас отказаться от преобладания черного цвета в вашем образе</div>
      </div>
      <div className="dress-divider"></div>
    </section>
  );
};

export default DressSection;
