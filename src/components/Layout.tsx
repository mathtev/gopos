import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Categories from '../pages/Categories';
import EditCategory from '../pages/EditCategory';
import EditProduct from '../pages/EditProduct';
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
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={EditProduct} />
          <Route path="/categories/:id" component={EditCategory} />
        </Switch>
      </main>
    </div>
  );
};

export default Layout;
