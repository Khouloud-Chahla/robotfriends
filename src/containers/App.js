import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {robots} from '../robots';
import 'tachyons';

class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }  
}

componentDidMount(){
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(users => this.setState({robots:users}))
}

 onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
  
  
}

  render(){
    const filtredRobots = this.state.robots.filter( user => {
      return user.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    if(this.state.robots.length === 0){
      return <h1>LOADING...</h1>
    }
    else{
    return (
      <div className="App">
        <h1 className='f2'>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <br></br>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filtredRobots}/> 
          </ErrorBoundry>
         
        </Scroll>
        
      </div>
    );
    }

  }
  
    
}

export default App;
