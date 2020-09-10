import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.scss';
import { auth, createUserProfileDocument } from '../firebase/Firebase.utils';
import Homepage from '../pages/Homepage/Homepage';
import Header from '../components/header/Header';
import SignInAndRegister from '../pages/sign-in-and-register/SignInAndRegister';
// import HatsPage from '../pages/HatsPage'
// import OuterWearPage from '../pages/OuterwearPage'
// import ShoesPage from '../pages/ShoesPage'
// import MensPage from '../pages/MensPage'
// import WomensPage from '../pages/WomensPage'
import ShopPage from '../pages/shop/ShopPage';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state)
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

// <Route exact path='/hats' component={HatsPage} />
//         <Route exact path='/outwear' component={OuterWearPage} />
//         <Route exact path='/shoes' component={ShoesPage} />
//         <Route exact path='/mens' component={MensPage} />
//         <Route exact path='/womens' component={WomensPage} />
