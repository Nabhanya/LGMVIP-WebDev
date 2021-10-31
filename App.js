import React, { Component } from 'react'
import Users from "../src/InfoCard";
import './App.css';

	
class App extends Component {
  constructor(props){
	super(props)
		
	this.state = {info_data :[],
                waiting : true                
  }
  

	this.infoState = this.infoState.bind(this)
  }
    
  infoState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({info_data :users.data,
                        waiting: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (
    <React.Fragment>
      <div className="bg_color">
        <div className="navbar">
              <h1 className="brand"> InfoFetcher</h1>
              <button className="btn" href="#button" onClick={this.infoState} type="submit"> Get User
              </button>
        </div>

        <div className="userbox">
          <Users waiting={this.state.waiting} users={this.state.info_data}/>
        </div>
      </div>
       
  
    </React.Fragment>
    )
  }
}
	
export default App;