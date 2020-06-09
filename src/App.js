import React from 'react';
import './App.css';
import './cssComponents/forum.css';
import './cssComponents/previewPostPage.css';
import './cssComponents/postWithCommentsPage.css';
import './cssComponents/imageGallery.css'
import  ImageGallery  from './components/imageGallery'
import { postRoutes } from './routes/routes'

function App() {

  return(
    <React.Fragment> 
      <ImageGallery>{postRoutes}</ImageGallery>
    </React.Fragment>
  );
}

export default App;
