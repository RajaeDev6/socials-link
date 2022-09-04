import React from 'react';
import './App.css';
import Button from './components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="content">
      <div className="container">
      <span className="profile_photo"></span>
        <span className="profile_name">
        <Button name={"instagram"} icon={<FontAwesomeIcon icon={faInstagram} size="lg" className="fa fa-instagram"/>} link={"https://www.instagram.com/rajae876__"} />
        <Button name={"Tiktok"} icon={<FontAwesomeIcon icon={faTiktok} size="lg" className="fa fa-tiktok"/>} link={"https://www.tiktok.com/@rajae876__?_t=8Uo4PZvcxFu&_r=1"}/>
        <Button name={"twitter"} icon={<FontAwesomeIcon icon={faTwitter} size="lg" className="fa fa-twitter"/>} link={"https://www.twitter.com"}/>
        <Button name={"youtube"} icon={<FontAwesomeIcon icon={faYoutube} size="lg" className="fa fa-youtube"/>} link={"https://www.youtube.com"}/>
      </div>
    </div>
  );
}

export default App;
