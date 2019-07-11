import React, {Component} from 'react';
import {Message} from '../Message/Message';

class MessageArea extends Component {
  displayMessages = () => {
    const {messages} = this.props
    const messagesToShow = messages.map(message => {
      return <Message key={message.id} {...message}/>
    })
    return messagesToShow
  }

  render() {
    return(
      <div>
        {this.displayMessages()}
      </div>
    )
  };
};

export default MessageArea;