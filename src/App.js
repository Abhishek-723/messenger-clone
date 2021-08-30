import './App.css';
import firebase from 'firebase'
import { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id , message: doc.data()})))
        })
    }, [])

    useEffect(() => {
        setUsername(prompt('Please enter your username'))
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection('messages').add({
            message: input,
            username:username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }

  return (
    <div className="App">
        {/* <img src="14-141676_facebook-messenger-app.png" alt="" /> */}
      <h1>Welcome to the Messenger App</h1>
      <h2>Hello {username}</h2>

    <form  className= "app__form">
    <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
    </FormControl>

        <IconButton disabled={!input} type="submit" variant="contained" color="primary" onClick={sendMessage}>
            <SendIcon />
        </IconButton>

    </form>

    <FlipMove>
      {
          messages.map(({id, message}) => (
              <Message key={id} username={username} message={message}/>
          ))
      }
    </FlipMove>
    </div>
  );
}

export default App;
