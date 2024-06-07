import React from 'react';
import SubscriptionPlans from './components/SubscriptionPlans/SubsciptionPlans';
import Clientsay from './components/Clientsay/Clientsay';
import './App.css';
import OurWork from './components/OurWork/OurWork';

const App = () => {
  return (
    <div className="App">
      <OurWork/>
      <SubscriptionPlans />
      <Clientsay />
    </div>
  );
};

export default App;
