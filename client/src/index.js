import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './Store/rootReducer';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';



// Creating the Redux Store where we will keep our states and data from API calls 

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
  );
  
  
serviceWorker.unregister();

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,