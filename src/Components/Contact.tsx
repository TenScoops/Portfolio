import Mail from '../assets/mail.avif'
import { CopyIcon } from '../icons'

const Contact = () => {
return (<div className='flex items-center justify-center h-screen'>
    <div>
        <img className='transform active:scale-95 transition 
                                duration-150 cursor-pointer' src={Mail} width={400}/>
    </div>
    <div className='flex flex-col ml-10 items-center'>
        <h1 className='text-2xl italic mb-6'>You can contact me at</h1>
        <div className='flex flex-row items-center rounded-xl w-[400px] h-[50px] border border-b-2 border-black py-8 hover:border-2 cursor-pointer'>
            <div className='mr-10 ml-6'><CopyIcon /></div>
            <h1 className='text-2xl'>p.ayres9@gmail.com</h1>
        </div>
    </div>

</div>)
}

export default Contact