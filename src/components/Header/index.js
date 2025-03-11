import Image from "next/image";
import nuboxLogo from '/public/images/Nubox.svg'

export default function Header(){
    return (
        <header className='w-full h-10 flex justify-center items-center bg-(--d-1) border-b border-solid border-(--g-1)'>
            <Image alt='Nubox' src={nuboxLogo} className='h-9/10 w-auto' />
        </header>
    )
}