import React, {useState} from 'react';
import "./nav.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div>
      <nav>
        <a href='#home' onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ''}><HomeIcon /></a>
        <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ''}><PersonIcon /></a>
        <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ''}><WorkIcon /></a>
        <a href='#portfolio' onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ''}><FolderIcon /></a>
        <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ''}><MessageIcon /></a>
      </nav>
    </div>
  )
}

export default Nav