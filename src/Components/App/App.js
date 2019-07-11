import React, {Component} from 'react';
import '../../styles/App.css';
import {FetchCall} from '../../utils/FetchApi';
import MessageArea from '../MessageArea/MessageArea';
import MessageInput from '../MessageInput/MessageInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      currentUser: ''
    }
  }

  componentDidMount = async () => {
    this.getNewMessages()
  }

  getNewMessages = async () => {
    const messages = await FetchCall('http://localhost:3001/chat');
    this.setState({messages})
  }

  setUser = (event) => {
    this.setState({currentUser: event.target.value})
  }

  render(){
    const {messages, currentUser} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1> Guild Education Messaging </h1>
        </header>
        <select onChange={this.setUser}>
          <option value=''>Select A User</option>
          <option value="Dylan">Dylan</option>
          <option value="Eric">Eric</option>
        </select>
        <MessageArea messages={messages}/>
        <MessageInput user={currentUser} getNewMessages={this.getNewMessages}/>
      </div>
    );
  };
}

export default App;
