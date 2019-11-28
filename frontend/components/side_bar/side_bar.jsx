import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <aside id='side-bar' className='side-bar'>
    <div>
      <Link to='/'>
        <img src={window.home} alt="home" />
        {/* Home */}
      </Link>
    </div>
    <div>
      <Link to='/videos/new'>
        <img src={window.video_add} alt="upload" />
        {/* Upload */}
      </Link>
    </div>
    <div>
      <a href='https://github.com/JasimAtiyeh'>
        <img src={window.GitHub} alt="github" />
        {/* GitHub */}
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/jasim-atiyeh-a0281a5a'>
        <img src={window.Linkedin} alt="linkedin" />
        {/* Linkedin */}
      </a>
    </div>
  </aside>
)

export default SideBar;