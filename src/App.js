import React from 'react';
import './App.css';
import './cssComponents/forum.css';
import './cssComponents/previewPostPage.css';
import './cssComponents/postWithCommentsPage.css';
import './cssComponents/imageGallery.css'
import { postRoutes } from './routes/routes'

function App() {

  return(
    <React.Fragment> 
      {postRoutes}
    </React.Fragment>
  );
}

export default App;
