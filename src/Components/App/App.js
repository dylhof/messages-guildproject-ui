import React, {Component} from 'react';
import '../../styles/App.css';
import MessageArea from '../MessageArea/MessageArea';
import MessageInput from '../MessageInput/MessageInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      currentUser: 'Dylan'
    }
  }
  render(){
    const {messages, currentUser} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1> Guild Education Messaging </h1>
          <MessageArea messages={messages}/>
          <MessageInput user={currentUser}/>
        </header>
      </div>
    );
  };
}

export default App;
