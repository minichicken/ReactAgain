import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import TodoContainder from '../containers/TodoContainer';
import NotFoundPage from '../containers/NotFoundPage';

const router = (
    <Route path='/' component={App}>
        <IndexRoute component={TodoContainder} />
        <Route path='*' component={NotFoundPage} />
    </Route>
);

export default router;