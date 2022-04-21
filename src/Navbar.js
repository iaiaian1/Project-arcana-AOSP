import logo from './img/arcana/logo-transparent.png';
import list from './img/svg/list.svg';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import DownloadModal from './DownloadModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="navbar-wrapper">
                <img 
                    src={ logo } 
                    className="logo"
                    alt='logo'
                    
                />
                <div className="navbar-btn-wrapper">
                    <ul>
                        <Link smooth to="#intro" className='li'>Home</Link>
                        <Link smooth to="#feature" className='li'>About</Link>
                        <Link smooth to="#stats" className='li'>Stats</Link>
                        <Link smooth to="#team" className='li'>Team</Link>
                        <Link smooth to="" className='li' onClick={() => setIsModalOpen(true)}>Download</Link>
                    </ul>
                </div>
                <div className="dropdown-menu-wrapper">
                    <img 
                        src={ list }
                        alt='dropdown'
                        className="list-btn-img"
                        onClick={ () => toggle() }
                    />
                    <div className={ !isOpen ? `dropdown-menu-btn` : `dropdown-menu-btn active`}>
                        <Link smooth to="#intro" className='dropdown-li' onClick={ () => console.log('foo') }>Home</Link>
                        <Link smooth to="#feature" className='dropdown-li'>About</Link>
                        <Link smooth to="#stats" className='dropdown-li'>Stats</Link>
                        <Link smooth to="#team" className='dropdown-li'>Team</Link>
                        <Link smooth to="" className='dropdown-li' onClick={() => setIsModalOpen(true)}>Download</Link>
                    </div>
                </div>
            </div>

            <DownloadModal open={isModalOpen} onClose={ () => setIsModalOpen(false) }></DownloadModal>
        </>
     );
}
 
export default Navbar;
