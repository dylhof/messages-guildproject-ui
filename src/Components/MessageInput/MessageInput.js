import React, {Component} from 'react';
import uuid from 'uuid';
import {FetchCall} from '../../utils/FetchApi';

class MessageInput extends Component{
  constructor() {
    super();
    this.state = {
      message: ''
    };
  };

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const newMessage = {
      id: uuid(),
      user: this.props.user,
      message: this.state.message
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    await FetchCall('http://localhost:3001/chat', options);
    this.setState({message: ''})
    this.props.getNewMessages()
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          value={this.state.message} 
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Post Message'
        />
      </form>
    )
  };
};

export default MessageInput;