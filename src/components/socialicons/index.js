import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofiles.map((profile) => {return (
          <li>
            <a href={profile.url}>
              {profile.icon}
            </a>
          </li>
        )})}
        {socialprofiles.github && (
          <li>
            <a href={socialprofiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofiles.linkedin && (
          <li>
            <a href={socialprofiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
