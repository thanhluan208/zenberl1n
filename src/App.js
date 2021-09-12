import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
  
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
import Testimonial from './Components/Testimonial/Testimonial';
import Customer from './Components/Customer/Customer';
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import Contact from './Components/Contact/Contact';
const App = () => {
  return (
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/auth" exact component={Auth} /> 
            <Route path="/testimonial" exact component={Testimonial} /> 
            <Route path="/admin" exact component={Customer} /> 
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
    </BrowserRouter>
  )
}

export default App;
