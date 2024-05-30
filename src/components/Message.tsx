import React from 'react';
import '../style/style-message.css'

interface MessageSectionProps {
  names: string[];
}

const MessageSection: React.FC<MessageSectionProps> = ({ names }) => {
  const formattedNames = names.length > 1
    ? `${names.slice(0, -1).join(', ')} и ${names[names.length - 1]}`
    : names[0];

  const isSinglePerson = names.length < 2;

  return (
    <section className="message">
      <div className="message-divider"></div>
      <div className="message-wrapper">
        <div className="message-descr">
          Уже совсем скоро в нашей жизни произойдет очень важное событие - наша свадьба!
        </div>
        <h2 className="message-title">
          {isSinglePerson ? 'ДОРОГАЯ' : 'ДОРОГИЕ И ЛЮБИМЫЕ'}
        </h2>
        <h2 className="message-name">
          {formattedNames}!
        </h2>
        <div className="message-message">
          Приглашаем {isSinglePerson ? 'тебя' : 'Вас'} разделить с нами важный и значимый день нашей жизни - создание нашей семьи!
        </div>
        <div className="message-date">
          <div className="message-date-date">06</div>
          <div className="message-date-divider"></div>
          <div className="message-date-date">07</div>
          <div className="message-date-divider"></div>
          <div className="message-date-date">24</div>
        </div>
        <div className="message-day">Суббота</div>
      </div>
      <div className="message-save">
        <div className="message-save-text">Save the date</div>
      </div>
    </section>
  );
};

export default MessageSection;
