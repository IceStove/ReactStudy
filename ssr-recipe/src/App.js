import React from 'react';
import {Route} from 'react-router-dom';
import Menu from './component/Menu';
import RedPage from './component/Red';
import BluePage from './component/Blue';

const App = () => {
  return (
    <div>
      <Menu/>
      <hr/>
      <Route path="/red" component={RedPage}/>
      <Route path="/blue" component={BluePage}/>
    </div>
  );
};

export default App;