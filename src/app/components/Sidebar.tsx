import ghibliLogo from '../../../public/Gibli_logo_complete.png'
import Image from "next/image";
import NavLinks from './NavLinks';

export default function SideNav() {
    return (
        <div className="w-full p-4 bg-red-200 flex justify-start md:flex-1 md:justify-center md:h-screen">

            < div className="w-40" >
                <Image src={ghibliLogo} alt="Ghibli Logo" />
                <NavLinks />
            </div >


        </div >
    );
}
