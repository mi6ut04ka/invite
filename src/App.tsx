import React, { useEffect } from 'react';
import './App.css';
import MainSection from './components/Main';
import MessageSection from './components/Message';
import { BrowserRouter as Router, Route, useParams, Routes, Navigate } from 'react-router-dom';
import StorySection from './components/Story';
import TimingSection from './components/Timing';
import DressSection from './components/Dress';
import DetailSection from './components/Detail';
import FormSection from './components/Form';
import { usersData } from './lib/users';


const Content: React.FC = () => {
  let { userId } = useParams<{ userId: string }>();
  const user = usersData.find(user => user.id === userId);

  useEffect(() => {
    if (user && user.id) {
      localStorage.setItem('user', user.id);
    }
  }, [user]);

  if (!user) {
    return <div className='invalid'>
      <img src="img/dec-1.svg" alt="dec" className="dec-1" />
      <img src="img/dec-2.svg" alt="dec" className="dec-2" />
      Пожалуйста, зайдите по qr-коду в вашем приглашении
      </div>;
  }

  return (
    <div>
      <MainSection />
      <MessageSection names={user.names} />
      <StorySection />
      <TimingSection />
      <div className="photo-title">
        <img src="img/top.svg" alt="" className="photo-title-top" />
        <div className="photo-title-text">ДРЕСС-КОД</div>
        <img src="img/bottom.svg" alt="" className="photo-title-bottom" />
      </div>
      <DressSection />
      <DetailSection />
      <FormSection names={user.names} id={user.id} />
    </div>
  );
};

function App() {
  useEffect(() => {
    const userId = localStorage.getItem('user');
    if (userId && !window.location.pathname.includes(userId)) {
      window.location.replace(`/${userId}`);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/invalid" replace />} />
        <Route path="/:userId" element={<Content />} />
        <Route path="/invalid" element={<div className='invalid'>
        <img src="img/dec-1.svg" alt="dec" className="dec-1" />
        <img src="img/dec-2.svg" alt="dec" className="dec-2" />
        Пожалуйста, зайдите по qr-коду в вашем приглашении</div>} />
      </Routes>
    </Router>
  );
}

export default App;