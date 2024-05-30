import React from 'react';
import '../style/style-form.css';

interface IProps {
    names: string[],
    id: string
}

const FormSection: React.FC<IProps> = ({ names, id }) => {
    return (
        <section className="form">
            <form action="submit.php" method="post">
                <input type="hidden" name="id" value={id} />
                <img src='/img/QUESTIONNAIRE.svg' alt='title' className="form-title" />
                <div className="form-subtitle">АНКЕТА ГОСТЯ</div>
                <div className="form-questions-block">
                    <div className="form-question">
                        <div className="form-question-wrapper">
                            <div className="form-question-number">01.</div>
                            <div className="form-question-question">СМОЖЕТЕ ЛИ ВЫ ПРИСТУТСТВОВАТЬ НА НАШЕМ ТОРЖЕСТВЕ?
                                <span><br />(Поставьте галочку напротив имен гостей, которые смогут разделить с нами наш праздник)</span></div>
                        </div>
                        <div className="form-questions-answers-block">
                            {names.map((name, index) => (
                                <div className="form-question-answers" key={index}>
                                    <input type="checkbox" name="guests[]" value={name} />
                                    <div className="form-question-answers-name">{name}</div>
                                </div>
                            ))}
                            <div className="form-question-answers">
                                <input type="checkbox" name="guests[]" value="Нас не будет" />
                                <div className="form-question-answers-name">Нас не будет</div>
                            </div>
                        </div>
                        <div className="form-question-descr">
                            (Если сейчас затрудняетесь ответить, то когда будете уверены в вашем присутствии/отсутствии - вернитесь к этому вопросу или отправьте ваш ответ повторно, если у Вас что-то изменится - <span>до 22.06.2024 г.</span>)
                        </div>
                    </div>
                    <div className="form-question">
                        <div className="form-question-wrapper">
                            <div className="form-question-number">02.</div>
                            <div className="form-question-question">НУЖЕН ЛИ ВАМ ТРАНСФЕР?
                                <span><br />(В целях вашего удобства от дворца Бракосочетания будет предоставлен автобус для отправления в ресторан)</span></div>
                        </div>
                        <div className="form-questions-answers-block">
                            <div className="form-question-answers">
                                <input type="checkbox" name="transfer" value="Да" />
                                <div className="form-question-answers-name">Да</div>
                            </div>
                            <div className="form-question-answers">
                                <input type="checkbox" name="transfer" value="Нет" />
                                <div className="form-question-answers-name">Нет</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-question">
                        <div className="form-question-wrapper">
                            <div className="form-question-number">03.</div>
                            <div className="form-question-question">КАКИЕ НАПИТКИ ВЫ ПРЕДПОЧИТАЕТЕ?
                                <span><br />(Можно выбрать несколько вариантов ответа)</span></div>
                        </div>
                        <div className="form-questions-answers-block">
                            <div className="form-question-answers">
                                <input type="checkbox" name="drinks[]" value="Шампанское" />
                                <div className="form-question-answers-name">Шампанское</div>
                            </div>
                            <div className="form-question-answers">
                                <input type="checkbox" name="drinks[]" value="Белое вино" />
                                <div className="form-question-answers-name">Белое вино</div>
                            </div>
                            <div className="form-question-answers">
                                <input type="checkbox" name="drinks[]" value="Красное вино" />
                                <div className="form-question-answers-name">Красное вино</div>
                            </div>
                            <div className="form-question-answers">
                                <input type="checkbox" name="drinks[]" value="Самогон" />
                                <div className="form-question-answers-name">Самогон</div>
                            </div>
                            <div className="form-question-answers">
                                <input type="checkbox" name="drinks[]" value="Свой вариант" />
                                <div className="form-question-answers-name">Свой вариант</div>
                                <input type="text" name="otherDrink" className="form-question-answers-input" />
                            </div>
                        </div>
                    </div>

                    <button type='submit' className='form-button'>Отправить</button>
                </div>
            </form>
        </section>
    );
}

export default FormSection;
