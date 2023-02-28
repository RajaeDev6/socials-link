import React from "react";
import "./App.css";
import Button from "./components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
    faGithub,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const socialHandles = [
  {
    name: "instagram",
    link: "https://www.instagram.com/rajae876__",
    icon: faInstagram,
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com/@rajae876__?_t=8Uo4PZvcxFu&_r=1",
    icon: faTiktok,
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com/rajae876_",
    icon: faTwitter,
  },
  {
    name: "Portfolio",
    link: "https://rajaedev.netlify.app",
    icon: faGithub,
  },
];

const App = () => {
  return (
    <div className="content">
      <div className="container">
        <span className="profile_photo"></span>
        <span className="profile_name">Rajae socials😎</span>
                <FontAwesomeIcon icon="fas fa-user" />
        {socialHandles.map((item) => (
          <Button
            name={item.name}
            icon={
              <FontAwesomeIcon
                icon={item.icon}
                size="lg"
                className={`fa fa-${item.name}`}
              />
            }
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
