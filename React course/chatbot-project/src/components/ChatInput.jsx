import { useState} from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    function saveInputText(event) {
        //gets  the value in the input tag 
        setInputText(event.target.value);
    };

    async function sendMessage() {
        if (isLoading || inputText === '') {
            return;
        }

        // Set isLoading to true at the start, and set it to
        // false after everything is done.
        setIsLoading(true);
        setInputText('');
        //this is a function 
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src={LoadingSpinner} className="loading-spinner" />,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setIsLoading(false);
    };
    function onKeyMove() {
        if (event.key === 'Enter') {
            sendMessage();
        } else if (event.key === 'Escape') {
            setInputText('');
        }
    }

    return (
        <div className="chat-input-container">
            <input placeholder="Send a message to Chatbot" size="30" onChange={saveInputText} value={inputText} onKeyDown={onKeyMove} disabled={isLoading} className='chat-input' />
            <button onClick={sendMessage} className='send-button'>Send</button>
        </div>
    );
};