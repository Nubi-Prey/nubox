import Image from "next/image";
import Nubox from '/public/images/Nubox.svg';
// Imagens temporariamente desativadas

export default function Message(props){
    const { userImage, message, userName, user, id} = props;
    const bgColor = user === 'client' ? 'bg-(--d-1)' : 'bg-(--d-2)';

    return (
        
            <div id={id} class={'md:min-w-150 max-w-150 p-3 m-1 rounded-lg flex flex-col align-top ' + bgColor}>
                <div class='flex max-w-fit items-center'>
                    { id ? <Image src={userImage} alt={userName} width={40} height={40} class='m-1 w-auto h-8'/>: null} 
                    <div id="message-user" class='text-xl'>{userName}</div>
                </div>
                
                <div class='max-w-fit break-words whitespace-pre-wrap' dangerouslySetInnerHTML={{__html: message}}>
                </div>
            </div>
        
        
    );
}