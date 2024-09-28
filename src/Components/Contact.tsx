import { useState } from 'react';
import Mail from '../assets/mail.avif';
// import Linemail from "../assets/linemail.webp";
import { CopyIcon } from '../icons';

const Contact = () => {
    const[notification, setNotification] = useState("p.ayres9@gmail.com")

    // whenever user clicks the copy section, copy to clipboard
    const handleCopyClick = () => {
        const email = 'p.ayres9@gmail.com';
        navigator.clipboard.writeText(email)

        setNotification("Email copied!")
        setTimeout(()=>{
            setNotification("p.ayres9@gmail.com")
        },2000)
    }

return (<div className='flex flex-col items-center justify-center xl:h-screen w-full mb-10 py-3 lg:mb-0 bg-purple-100'>
    <div className='xl:hidden'>
        <h1 className='text-3xl font-bold mb-8'>Contact</h1>
    </div>
    <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div>
            <img className='transform active:scale-95 transition 
                                    duration-150 icon-hover3 rounded-full' src={Mail} width={440}/>
        </div>
        <div onClick={handleCopyClick} 
            className='flex flex-col sm:ml-10 items-center'>
            <h1 className='text-xl md:text-2xl italic mb-6'>You can contact me at</h1>
            <div className='flex flex-row items-center justify-center rounded-xl w-80 sm:w-96 lg:w-[400px] h-[50px] border border-b-2 border-black py-8 hover:border-2 cursor-pointer bg-white'>
                <div className='mr-5 '><CopyIcon /></div>
                <h1 className='text-xl md:text-2xl'>{notification}</h1>
            </div>
        </div>
    </div>

</div>)
}

export default Contact