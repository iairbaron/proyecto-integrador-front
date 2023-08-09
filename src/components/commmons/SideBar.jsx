import { useState } from 'react'
import Buttons from './Buttons'
import CustomizedInputBase from "../commmons/TextField";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div >
            <button className='ml-4' onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>
            <div className={`${open ? "w-80" : "w-0"} bg-white-600 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
                <div className={`${!open && "hidden"} pt-3`}>
                    <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className='p-5 text-start aling-center text-white'>
                        <div className='text-xl   cursor-pointer py-3 mb-2'><Link to="./">Home</Link> </div>
                        <div className='text-xl   cursor-pointer py-3 mb-2'><Link to="./">package</Link></div>
                        <div className='text-xl  cursor-pointer py-3 mb-2'><Link to="./">Locations</Link></div>
                        <div className='text-xl   py-3 mb-2'> <Buttons classNameButton="w-20  rounded-full " variantButton="contained" colorButton="successCustom" classNameText="text-white" text="Log in" />
                        </div>
                        <div className='text-white text-xl  py-3 mb-2'><Buttons classNameButton="w-20  rounded-full" variantButton="contained" colorButton="successCustom" classNameText="text-white" text="Register" />
                        </div>
                        <div className='text-white text-xl  py-3 mb-2'><CustomizedInputBase width={25} /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar