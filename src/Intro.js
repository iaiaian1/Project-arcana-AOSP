import bannerblood from './img/arcana/bannerlamp.png';

const Intro = () => {
    return ( 
        <div className="intro-wrapper" id='intro'>
            <div className="intro-text-wrapper">
                <h2>Fast<span>.</span></h2>
                <h2>Up-to-date<span>.</span></h2>
                <h2>Customizable<span>.</span></h2><br />
                <p>A custom mobile phone operating system based on Android Open Source Project focused on improving user experience, with a little bit of spice.</p>
            </div>
            <div className="intro-banner-wrapper">
                <img src={ bannerblood } alt="banner" />
            </div>
        </div>
     );
}
 
export default Intro;
