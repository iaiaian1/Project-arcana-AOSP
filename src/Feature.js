import battery from './img/svg/battery.svg';
import community from './img/svg/community.svg';
import customization from './img/svg/customization.svg';
import github from './img/svg/github.svg';
import performance from './img/svg/performance.svg';
import security from './img/svg/security.svg';
import logo from './img/arcana/logo-transparent.png';

const Feature = () => {
    return ( 
        <>
            <h1 className='component-h1'>Features</h1>
            <div className="feature-wrapper" id='feature'>
                <div className="feature-section">
                    <div className="feature">
                        <img src={ battery } alt="" className='feature-logo'/>
                            <div className="feature-text">
                                <h3>Battery-friendly</h3>
                                <p>Customization and spices that do not tank the battery life.</p>
                            </div>
                    </div>
                    <div className="feature">
                        <img src={ community } alt="" className='feature-logo'/>
                            <div className="feature-text">
                                <h3>Community driven</h3>
                                <p>Magical community that helps each other and reachable admins.</p>
                            </div>
                    </div>
                </div>
                <div className="feature-section">
                    <div className="feature">
                        <img src={ customization } alt="" className='feature-logo'/>
                        <div className="feature-text">
                            <h3>Customization</h3>
                            <p>Project Arcana provides rich features and customizations for better user experience.</p>
                        </div>
                    </div>
                    <div className="feature-banner">
                        <img src={ logo } alt=""/>
                    </div>
                    <div className="feature">
                        <img src={ github } alt="" className='feature-logo'/>
                        <div className="feature-text">
                            <h3>Transparency</h3>
                            <p>Project Arcana is 100% open source. No secrets, just transparency and pure magic.</p>
                        </div>
                    </div>
                </div>
                <div className="feature-section ">
                    <div className="feature">
                        <img src={ performance } alt="" className='feature-logo'/>
                        <div className="feature-text">
                            <h3>Performance</h3>
                            <p>Magical user experience, lag-free, fast and enjoyable.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src={ security } alt="" className='feature-logo'/>
                        <div className="feature-text">
                            <h3>Security</h3>
                            <p>Up to date security patches from Google and customizations for more user-privacy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Feature;