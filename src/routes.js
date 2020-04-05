import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Author from './pages/Author';
import Book from './pages/Book';
import Company from './pages/Company';
import Genre from './pages/Genre';
import NewRegister from './pages/NewRegister';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <div className="mainContainer">
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Book} />
            <Route path="/authors" component={Author} />
            <Route path="/companys" component={Company} />
            <Route path="/genres" component={Genre} />
            <Route path="/new" component={NewRegister} />
            <Route path="/edit/:id/:type" component={Edit} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}
