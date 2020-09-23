import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user-selectors';
import { checkUserSession } from '../redux/user/user-actions';
import '../App.scss';

const HomePage = lazy(() => import('../pages/homepage/Homepage'));
const ShopPage = lazy(() => import('../pages/shop/ShopPage'));
const SignInAndRegister = lazy(() => import('../pages/sign-in-and-register/SignInAndRegister'));
const CheckoutPage = lazy(() => import('../pages/checkout/Checkout'));
const Header = lazy(() => import('../components/header/Header'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <Suspense fallback={<div>Loading.....</div>}>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndRegister />
          }
        />
      </Switch>
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
