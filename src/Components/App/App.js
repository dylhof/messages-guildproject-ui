import React, {Component} from 'react';
import '../../styles/App.css';
import MessageArea from '../MessageArea/MessageArea';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1> Guild Education Messaging </h1>
          <MessageArea messages={this.state.messages}/>
        </header>
      </div>
    );
  };
}

export default App;
