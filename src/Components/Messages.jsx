import { useState } from 'react'

const Messages = ({userProfile, socket}) => {
    const [ textInput, setTextInput ] = useState('')
    const [messages, setMessages ] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit('message', textInput);
        setMessages((currMessages) => {
            return [ textInput, ...currMessages] 
        }) 
        setTextInput('')
    }

    return (
        <div>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                {messages.map((message) =>{
                    return (
                        <li>
                            <p>{userProfile.username}</p>
                            <p>{message}</p>
                        </li>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input value={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Messages;