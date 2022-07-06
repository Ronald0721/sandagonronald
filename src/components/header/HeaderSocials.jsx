import React from 'react';
import "./header.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com/in/ronald-sandagon-abarquez/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="http://github.com/Ronald0721/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="http:/instagram.com" target="_blank" rel="noreferrer"><InstagramIcon /></a>
    </div>
  )
}

export default HeaderSocials