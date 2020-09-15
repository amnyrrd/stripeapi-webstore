import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user-selectors';
import { checkUserSession } from '../redux/user/user-actions';
import '../App.scss';
import Homepage from '../pages/homepage/Homepage';
import Header from '../components/header/Header';
import SignInAndRegister from '../pages/sign-in-and-register/SignInAndRegister';
import CheckoutPage from '../pages/checkout/Checkout';
// import HatsPage from '../pages/HatsPage';
// import OuterWearPage from '../pages/OuterwearPage';
// import ShoesPage from '../pages/ShoesPage';
// import MensPage from '../pages/MensPage';
// import WomensPage from '../pages/WomensPage';
import ShopPage from '../pages/shop/ShopPage';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndRegister />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// <Route exact path='/hats' component={HatsPage} />
//         <Route exact path='/outwear' component={OuterWearPage} />
//         <Route exact path='/shoes' component={ShoesPage} />
//         <Route exact path='/mens' component={MensPage} />
//         <Route exact path='/womens' component={WomensPage} />
