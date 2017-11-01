import React from 'react';
import ReactDOM from 'react-dom';
import List from './index';
import { Provider } from 'react-redux';

import configureStore from '../../../client/configureStore';

const store = configureStore();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
        <List/>
    </Provider>, div);
});
