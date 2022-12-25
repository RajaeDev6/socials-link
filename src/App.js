import React from 'react';
import './App.css';
import Button from './components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    const instagramLink = "https://www.instagram.com/rajae876__"
    const youtubeLink = "https://www.youtube.com"
    const tiktokLink = "https://www.tiktok.com/@rajae876__?_t=8Uo4PZvcxFu&_r=1"
    const twitterLink = "https://www.twitter.com"

    return (
    <div className="content">
      <div className="container">
      <span className="profile_photo"></span>
        <span className="profile_name">Rajae socials😎</span>
        <Button name={"Instagram"} icon={<FontAwesomeIcon icon={faInstagram} size="lg" className="fa fa-instagram"/>} link={instagramLink} />
        <Button name={"Tiktok"} icon={<FontAwesomeIcon icon={faTiktok} size="lg" className="fa fa-tiktok"/>} link={tiktokLink}/>
        <Button name={"Twitter"} icon={<FontAwesomeIcon icon={faTwitter} size="lg" className="fa fa-twitter"/>} link={twitterLink}/>
        <Button name={"Youtube"} icon={<FontAwesomeIcon icon={faYoutube} size="lg" className="fa fa-youtube"/>} link={youtubeLink}/>
      </div>
    </div>
  );
}

export default App;
