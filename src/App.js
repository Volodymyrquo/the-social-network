import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import Settings from './components/settings/Settings';
import News from './components/news/News';
import Musik from './components/musik/Musik';
import Users from './components/users/Users';
import { Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div>
     <Header />
       
<Route path="/profile" component={Profile} />
<Route path="/dialogs" component={Dialogs} />
<Route path="/news" component={News} />
<Route path="/musik" component={Musik} />
<Route path="/users" component={Users} />
<Route path="/settings" component={Settings} />
    
    </div>
    </BrowserRouter>
  );
}

export default App;
