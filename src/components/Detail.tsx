import React from 'react';
import '../style/style-detail.css'

const DetailSection = () => {
    return (
        <section className="detail">
            <div className="detail-title">
                ДЕТАЛИ
            </div>
            <div className="detail-subtitle">
                <img src="img/DETAILS.svg" alt="subtitle" />
            </div>
            <div className="detail-info">
                Подтвердите своё присутствие до 
                <span>
                    22.06.2024
                </span> включительно в
            </div>
            <div className="detail-form">Анкетe гостя</div>
            <img src="img/detail-img.svg" alt="img" className="detail-img" />
            <div className="detail-arrow">
                <img src="img/DETAILS-arrow.svg" alt="arrow" />
            </div>
        </section>
    );
}

export default DetailSection;
