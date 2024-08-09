import Mail from '../assets/mail.avif'
import { CopyIcon } from '../icons'

const Contact = () => {
return (<div className='flex flex-col items-center justify-center xl:h-screen w-full mb-10 lg:mb-0'>
    <div className='xl:hidden'>
        <h1 className='text-3xl font-bold mb-8'>Contact</h1>
    </div>
    <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div>
            <img className='transform active:scale-95 transition 
                                    duration-150 cursor-pointer' src={Mail} width={400}/>
        </div>
        <div className='flex flex-col sm:ml-10 items-center'>
            <h1 className='text-xl md:text-2xl italic mb-6'>You can contact me at</h1>
            <div className='flex flex-row items-center rounded-xl w-80 sm:w-96 lg:w-[400px] h-[50px] border border-b-2 border-black py-8 hover:border-2 cursor-pointer'>
                <div className='mr-10 ml-6'><CopyIcon /></div>
                <h1 className='text-xl md:text-2xl'>p.ayres9@gmail.com</h1>
            </div>
        </div>
    </div>

</div>)
}

export default Contact