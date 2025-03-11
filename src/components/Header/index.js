import Image from "next/image";
import nuboxLogo from '/public/images/Nubox.svg'
import githubLogo from '/public/images/github.svg'
import nubiLogo from '/public/images/nubi.svg'

export default function Header(){
    return (
        <header className='w-full h-10 flex justify-center items-center bg-(--d-1) border-b border-solid border-(--g-1)'>
            <div class='flex justify-evenly items-center md:max-w-150 w-full h-full'>
                <Image alt='Nubox' src={nuboxLogo} className='h-9/10 w-auto' />
                <a href="https://github.com/Nubi-Prey/nubox" class='h-9/10 w-auto'>
                    <Image alt='Github' title="GitHub" src={githubLogo} className='h-full w-auto hover:bg-(--g-1) rounded-full' />
                </a>
            </div>
        </header>
    )
}