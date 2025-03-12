"use client"

import Message from './Message';
import { useEffect, useState } from 'react';
import axios from 'axios';
import loadingGif from '/public/images/loading.gif';

export default function Chat(){

    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    function write(data){
        const {message, id} = data;
        if(!message) return;

        setMessages((prevMessages) => [...prevMessages, {...data}]);

        const chat = document.getElementById('chat-messages');
        chat.scrollTop = chat.scrollHeight - chat.clientHeight
    }

    function submit(data){
        const {message} = data;
        const loadingMessage = document.getElementById('loading')
        if(!message) return;

        if(loadingMessage) return
        
        write(data)

        setText('');
        document.getElementById('message').value = '';

        write({userImage:loadingGif, userName: 'Nubox', message: 'Estou pensando...', user: 'nubox', id: 'loading'})
        axios.post('/api/nubox', {message}).then( function (response){
            document.getElementById('loading').remove();
            write({userName: 'Nubox', message: response.data.message, user: 'nubox'})
        })
    }

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            submit({message: text, user: 'client'})
        }
    }

    return (
        
        <div id="chat-container" class='w-full flex flex-col h-full relative'>

            <div id="chat-messages" class='md:items-center p-1 flex flex-col h-full max-h-full overflow-auto overflow-x-hidden'>
                <Message userName='Nubox' message='Olá! Como posso te ajudar?' user='nubox'/>
                {messages.map((msg, index) => 
                    <Message key={index} {... msg}/>
                )}
            </div>

            <div id="chat-input" class='p-5 bottom-0 w-full flex justify-center items-center '>
                <form onSubmit={(e) => {e.preventDefault(); submit({message: text, user: 'client'})}} class='max-w-150 bg-(--d-1) p-5 w-full flex justify-around items-center rounded-4xl'>
                    
                    <textarea id='message' onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Digite sua mensagem" class='text-sm w-8/10 p-1 bg-(--d-2) h-8 rounded-xl border-(--g-1) border  focus:outline-none '/>
                    
                    <button class='w-10 h-10 hover:bg-(--d-2) rounded-full flex justify-center items-center' type='submit'>
                        <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                    </button>
                    
                </form>
            </div>
        </div>
    );
};
