import React from 'react';
import {Link, Route} from 'react-router-dom';
import AuthRoute from './util/route_util';

import NavBarContainer  from './components/nav_bar_container';
import SignupFormContainer from './components/signup_form_container';
import LoginFormContainer from './components/login_form_container';
import VideoUploadContainer from './components/videos/video_upload_container';
import VideoEditContainer from './components/videos/video_edit_container';
import VideoIndexContainer from './components/videos/videos_index_container';
import SideBar from './components/side_bar';
import VideoShowContainer from './components/videos/video_show_container';



const App = () => (
  <div>
    <header >
        <NavBarContainer />
    </header>
    <div className='body'>
      <div className='front-page'>
        {/* <SideBar /> */}
      
        <Route exact path='/' component={VideoIndexContainer}/>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <Route path='/videos/new' component={VideoUploadContainer}/>
        <Route exact path='/videos/:video_id' component={VideoShowContainer}/>
      </div>
    </div>
  </div>
);

export default App;