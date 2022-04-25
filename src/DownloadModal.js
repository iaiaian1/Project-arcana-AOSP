import ReactDOM from "react-dom";
import maintainers from './maintainers.json';
import download from './img/svg/download.svg';

const DownloadModal = ({ open, onClose }) => {
    const handleClick = (e) => {
        if (e.target.className === 'download-modal-wrapper'){
            onClose()
        }
    }
    document.addEventListener('click', handleClick)

    //If state is false, return nothing.
    if (!open) return null

    return ReactDOM.createPortal(
        <div className="download-modal-wrapper">
            <div className="download-modal">
                <h1 className='component-h1-modal'>Downloads</h1>
                {maintainers && maintainers.maintainers.map(info => 
                    <div className="device" key={info.codename}>
                        <img src={info.img} alt="" id="myimg" className="device-img"/>
                        <h4 className="device-name">{ info.device }</h4>
                        <p className="device-maintainer">By: { info.maintainer }</p>
                        <button className="download-button" onClick={ () => window.open(`https://sourceforge.net/projects/project-arcana-releases/files/${info.version}/${info.codename}`)}><img src={download} alt="" />Download</button>
                    </div>
                )}
                <button onClick={onClose} className="modal-button"> <strong>Close</strong></button>
            </div>
        </div>,
        document.getElementById('portal')
     );
}
 
export default DownloadModal;