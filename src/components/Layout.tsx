import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Categories from '../pages/Categories';
import EditCategories from '../pages/EditCategories';
import EditProducts from '../pages/EditProducts';
import Products from '../pages/Products';
import Header from './Header';



const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/categories" />} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/products" component={Products} />
          <Route path="/edit-products" component={EditProducts} />
          <Route path="/edit-categories" component={EditCategories} />
        </Switch>
      </main>
    </div>
  );
};

export default Layout;
