# Guild Education Messaging

This application is a simple messaging App for Dylan and Eric to chat with each other on the same computer. I approached this project by first whiteboarding out a quick wireframe of what the app should look like.  From there I started with the BackEnd using a simple Node.JS Express server with a local variable to store the messages.  For this I created two simple endpoints, one to retrieve the messages and one to post new messages.

Once the backend was complete, I created a React app so the I could reuse a single component to display all the messages.  Since this was such a simple app I decided not to use Redux. I started by createing the message component and a message area component to display them and to keep the concerns of the components seperate. I then created a control form to add messages.  To retrieve and post the messages I used the fetch api which I added as a utility function for reuseability. 

The BackEnd for this application can be found at
#### https://github.com/dylhof/messages-guildproject-api

### Preview:  
![Video Preview of Guild Messaging](./src/styles/example.gif)

## Getting Started:
#### Additional Setup instructions for the backend can be found at the link above.

Clone the repository:
```
git clone https://github.com/dylhof/messages-guildprojects-ui
```

install the dependencies:
From your terminal within your project directory run:
```
$ npm install
```
Start the server:
```
$ npm start
```

## In Future:

This is a simple app which could be improved in future.  Here are just a few of the ways to improve the functionality and userinterface for this app. 
- Thorough Testing
- A way for users to login securely 
- A Database to store the messages for future retrieval
- Users should be able to see more quickly who is sending a message.  This could be indicated by color, positioning of the messages or user icons. 
- All kinds of styles
