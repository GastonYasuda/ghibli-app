/* eslint-disable @next/next/no-img-element */
import githubLogo from '../../../public/github-white.png'
import linkedinLogo from '../../../public/linkedin-logo.png';
import gastonLink from '../../../public/logo.png';
import '../Styles/footerStyle.css'
export const Footer = () => {
    return (
        <section className='ml-80 footer'>
            <div className='footer__container flex flex-col md:pl-16'>

                <div className="inline-flex items-center">
                    <img src={githubLogo.src} alt="github logo" />
                    <span className='ml-2'>
                        Mirá este código en
                        <a
                            href="https://github.com/GastonYasuda/ghibli-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/GastonYasuda
                        </a>
                    </span>
                </div>


                <div className="inline-flex items-center">
                    <img src={linkedinLogo.src} alt="linkedin logo" />
                    <span className='ml-2'>
                        Mirá mi perfil en
                        <a
                            href="https://www.linkedin.com/in/gaston-yasuda/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/gaston-yasuda/
                        </a>

                    </span>
                </div>

                <div className="inline-flex items-center">
                    <img src={gastonLink.src} alt="my web logo" />
                    <span className='ml-2'>
                        Conocé mis proyectos en
                        <a
                            href="https://gastonyasudaportfolio.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            gastonyasuda.netlify
                        </a>
                    </span>
                </div>

            </div>
        </section>
    )
};

export default Footer;
