import React from 'react';
import './App.css';
import './cssComponents/forum.css';
import './cssComponents/previewPostPage.css';
import './cssComponents/postWithCommentsPage.css';
import  ImageGallery  from './components/imageGallery'
import { postRoutes } from './routes/routes'

function App() {

  return(
    <React.Fragment>
      {postRoutes}
      <ImageGallery></ImageGallery>
    </React.Fragment>
  );
}

export default App;
