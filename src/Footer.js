import banner from './img/arcana/bannerblood_nospace.png';
import telegram from './img/svg/telegram.svg'
import github from './img/svg/github.svg'
import sourceforge from './img/svg/sourceforge.svg'

const Footer = () => {

    const maintainershipLink = 'https://github.com/projectarcana-aosp/official_devices';
    return (
        <>
            {/* <div className="permanent-logo-wrapper" id='footer' onClick={()=>{console.log('foo')}}>
                <ul>
                    <li>Home</li>
                    <li>Intro</li>
                </ul>
                <img src={ logo } alt="" className="logo"/>
            </div> */}
            <div className="footer-wrapper">
                <div className= "footer-text-wrapper">
                    <div className="footer-text-wrapper-left">
                        <img src={ banner } alt="" className='footer-banner'/>
                        <p>Custom mobile operating OS based from Android Open Source Project and AOSPExtended.</p>
                    </div>
                    <div className="footer-text-wrapper-right">
                        <h2>Apply for maintainership</h2>
                        {/* todo: pointer style */}
                        <p onClick={() => window.open(maintainershipLink)}>{ maintainershipLink }</p>
                        <h2 className='additional-links'>Dont trust the links? xd</h2>
                        <h4>Source</h4>
                        <p onClick={() => {window.open('https://github.com/projectarcana-aosp')}}>https://github.com/projectarcana-aosp</p>
                        <h4>Telegram community</h4>
                        <p onClick={() => {window.open('https://t.me/ArcaneOSCommunity')}}>https://t.me/ArcaneOSCommunity</p>
                        <h4>Telegram updates</h4>
                        <p onClick={() => {window.open('https://t.me/ArcaneOSUpdates')}}>https://t.me/ArcaneOSUpdates</p>
                        <h4>Sourceforge</h4>
                        <p onClick={() => {window.open('https://sourceforge.net/projects/project-arcana-releases/files/')}}>https://sourceforge.net/projects/project-arcana-releases/files/</p>
                    </div>
                </div>
                <div className="footer-logos">
                    <ul>
                        <li><img src={ telegram } alt="" onClick={() => {window.open('https://t.me/ArcaneOSUpdates')}}/></li>
                        <li><img src={ github } alt="" onClick={() => {window.open('https://github.com/projectarcana-aosp')}}/></li>
                        <li><img src={ sourceforge } alt="" onClick={() => {window.open('https://sourceforge.net/projects/project-arcana-releases/files/')}}/></li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>&copy; Copyright 2022 Project Arcana | Site by <s onClick={() => {window.open('https://github.com/iaiaian1')}}>Jake Brian Yap(iaiaian1)</s></p>
                </div>
            </div>
        </>  
     );
}
 
export default Footer;
