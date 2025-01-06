import Image from 'next/image';
import ghibliLogo from '../../../public/Gibli_logo_complete.png'
import NavLinks from './NavLinks';

export default function SideNav() {
    return (
        <div className='md:fixed'>

            <div className="w-full p-4 bg-red-200 flex justify-start md:flex-1 md:h-screen">

                <div className="md:w-40 w-full flex flex-col items-center" >
                    <Image src={ghibliLogo} alt="Ghibli Logo" className='md:max-w-full max-w-64	 ' />
                    <div className='w-full'>
                        <NavLinks />
                    </div>
                </div >
            </div>


        </div >
    );
}
