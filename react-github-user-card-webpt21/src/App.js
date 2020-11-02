import React from 'react';
// import axios from 'axios';
import User from './components/User';
import { Heading } from './components/Styles'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers: [],
      following: []
    }
  }

  componentDidMount(){
    fetch("https://api.github.com/users/jasonours")
    .then(res => res.json())
    .then(data => {
      this.setState({user: data});
    })
    .catch(error => console.log(error))
    console.log(this.state.user);
    fetch("https://api.github.com/users/jasonours/followers")
    .then(res2 => res2.json())
    .then(data => {
      this.setState({followers: data});
    })
    .catch(err => console.log(err))
    console.log(this.state.followers);
    fetch("https://api.github.com/users/jasonours/following")
    .then(res3 => res3.json())
    .then(data => {
      this.setState({following: data});
    })
    .catch(err => console.log(err))
    console.log(this.state.following);
  }
  
  render() {
    return (
      <div className="App">
        <Heading>GitHub User Cards</Heading>
        <User user={this.state.user} followers={this.state.followers} following={this.state.following}/>
      </div>
    )
  }
}

export default App;