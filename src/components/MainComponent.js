import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Contact from './ContactComponent';
import Detailed from './dishDetailed';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }

   render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
         promotion ={this.state.promotions.filter((dish) => dish.featured)[0]}
         leader ={this.state.leaders.filter((dish) => dish.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return( 
        <Detailed dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
        comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]}
        /> 

      );
    }

     return(
       <div className="App">
       <Header /> 
        <Switch>
          <Route path="/home" component= {HomePage} />
          <Route  exact path="/menu" component= {() => <Menu dishes ={this.state.dishes} />} />
          <Route exact path = "/contact" component = {Contact} />
          <Route  path="/menu/:dishId" component={DishWithId}/>
          <Route path="/about" component={ () => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
       <Footer />
       </div>

     );

   }
}

export default Main;
