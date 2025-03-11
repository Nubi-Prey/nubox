import Image from "next/image"

export default function Profile(props){
    const { picture, userName } = props;
    return (
        <div id="chat-header" class='p-1 h-18 flex items-center border-b border-(--g-1) bg-(--d-2)'>
            <Image src={picture} alt={userName} class='h-10 w-10 rounded-full m-1'/>
            <h1 id="username" class='text-xl font-bold m-1 h-auto'>{userName}</h1>
        </div>
    )
}