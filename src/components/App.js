import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.scss';
import Homepage from '../pages/Homepage/Homepage';
import Header from '../components/header/Header'
// import HatsPage from '../pages/HatsPage'
// import OuterWearPage from '../pages/OuterwearPage'
// import ShoesPage from '../pages/ShoesPage'
// import MensPage from '../pages/MensPage'
// import WomensPage from '../pages/WomensPage'
import ShopPage from '../pages/shop/ShopPage'




function App() {
  return (
    <div className='App'>
    <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />


      </Switch>
    </div>
  );
}

export default App;


// <Route exact path='/hats' component={HatsPage} />
//         <Route exact path='/outwear' component={OuterWearPage} />
//         <Route exact path='/shoes' component={ShoesPage} />
//         <Route exact path='/mens' component={MensPage} />
//         <Route exact path='/womens' component={WomensPage} />