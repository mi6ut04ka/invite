import React from 'react';
import '../style/style-timing.css'; // Подключаем стили

const TimingSection: React.FC = () => {
  return (
    <section className="timing">
      <div className="timing-title-block">
        <img src="img/TIMING-title.svg" alt="title" className="timing-title" />
        <div className="timing-subtitle">Программа дня</div>
      </div>
      <div className="timing-wrapper">
        <div className="timing-block">
          <div className="timing-time">14:30</div>
          <div className="timing-block-dot">
            <div className="timing-dot"></div>
          </div>
          <div className="timing-info">
            <div className="timing-time-title">Сбор гостей</div>
            <div className="timing-time-spot">г. Иркутск, ул. Декабрьских событий, 106, Дворец Бракосочетания</div>
          </div>
        </div>
        <div className="timing-block">
          <div className="timing-time">15:00</div>
          <div className="timing-block-dot-right timing-block-dot">
            <div className="timing-dot"></div>
          </div>
          <div className="timing-info">
            <div className="timing-time-title">ТОРЖЕСТВЕННАЯ РЕГИСТРАЦИЯ БРАКА</div>
          </div>
        </div>
        <div className="timing-block">
          <div className="timing-time">16:00</div>
          <div className="timing-block-dot">
            <div className="timing-dot"></div>
          </div>
          <div className="timing-info">
            <div className="timing-time-title">ОТПРАВЛЕНИЕ АВТОБУСА</div>
            <div className="timing-time-spot">Дворец Бракосочетания → пос. Бурдугуз</div>
          </div>
        </div>
        <div className="timing-block">
          <div className="timing-time">17:00</div>
          <div className="timing-block-dot timing-block-dot-right">
            <div className="timing-dot"></div>
          </div>
          <div className="timing-info">
            <div className="timing-time-title">НАЧАЛО БАНКЕТА</div>
            <div className="timing-time-spot">пос. Бурдугуз, ул.Лесная, 1, парк-отель Бурдугуз, многофункциональный зал Ангара №2</div>
          </div>
        </div>
        <div className="timing-block-last">
          <div className="timing-time">23:00</div>
          <div className="timing-block-dot">
            <div className="timing-dot"></div>
          </div>
          <div className="timing-info">
            <div className="timing-time-title">ЗАВЕРШЕНИЕ ПРОГРАММЫ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingSection;
