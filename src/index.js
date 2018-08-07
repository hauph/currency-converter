import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './style/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Calculator from './calculator'

import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
    render() {
        return (
            <div className="container">
            <BrowserRouter exact path={`/home`} render={ (routerProps)=><Calculator routerProps={routerProps} />}></BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<BrowserRouter
    basename={process.env.PUBLIC_URL}
  ><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
