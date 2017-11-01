import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './client/components/App/App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './client/configureStore';

const store = configureStore();

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
