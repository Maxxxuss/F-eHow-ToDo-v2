import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import NotesDashboardPage from './components/NotesDashboard';
import ProjectDashboard from './components/ProjectDash/ProjectDashboard';
import store from './store/configureStore'
import './styles/styles.scss'
import { BrowserRouter as Router
    
  , Route, Switch,  } from 'react-router-dom';
import {Editor} from './components/inputs/quillEditor/quillEditorIndex';




ReactDOM.render(
  <Provider store={store}>
    <Router >
      <div>
        <Switch>
        <Route path="/" component={NotesDashboardPage} exact={true} />

          <Route path="/proDash" component={ProjectDashboard} />

        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


