import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../redux/ducks/todo';

import App from './App';

export default connect((state) => ({}),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, todoActions), dispatch)
    })
)(App);
