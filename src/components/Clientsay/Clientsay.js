import React from 'react';
import './Clientsay.css';
import ellipse129 from '../../assets/Ellipse.png';

const Clientsay = () => {
  return (
    <div className="clientsay-container">
      <div className="clientsay-content">
        <p className="quote-mark left-quote">“</p>
        <p className="clientsay-heading">
          WHAT OUR <span className="highlight">CLIENT</span> SAY'S
        </p>
        <div className="client-info">
          <img src={ellipse129} className="client-image" alt="Client" />
          <p className="client-name">Aman Gupta</p>
          <p className="client-title">CEO Boat and Techno</p>
        </div>
        <div className="client-feedback">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
        </div>
        <p className="quote-mark right-quote">”</p>
      </div>
    </div>
  );
};

export default Clientsay;
