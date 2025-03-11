'use client'
import Message from "../Message";

export default function Input(){
    
    function write(data){
        const {username, message} = data;
        const messages = document.getElementById('chat-messages');
        messages.appendChild(<Message message={message} userName={username}/>);
    }

    return (
        <div id="chat-input" class='p-5 bottom-0 w-full flex justify-center items-center '>
            <div class='max-w-150 bg-(--d-1) p-5 w-full flex justify-around items-center rounded-4xl'>
                
                <textarea id='message' type="text" placeholder="Digite sua mensagem" class='text-sm w-8/10 p-1 bg-(--d-2) h-8 rounded-xl border-(--g-1) border  focus:outline-none '/>
                
                <button class='w-10 h-10 hover:bg-(--d-2) rounded-full flex justify-center items-center' onClick={() =>
                    write({username: 'Nubi', message: document.getElementById('message').value})
                }>
                    <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                    </svg>
                </button>
                
            </div>
        </div>
    )
}