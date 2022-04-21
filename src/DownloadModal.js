import { useState } from "react";
import ReactDOM from "react-dom";
import Firebase from './Firebase';
import download from './img/svg/download.svg';

const DownloadModal = ({ open, onClose }) => {
    const [devices, setDevices] = useState([]);
    const handleClick = (e) => {
        // console.log(e.target.className)
        if (e.target.className === 'download-modal-wrapper'){
            onClose()
        }
    }
    document.addEventListener('click', handleClick)

    if (!open) return null

    return ReactDOM.createPortal(
        <div className="download-modal-wrapper">
            <Firebase state={setDevices}/>
            <div className="download-modal">
                <h1 className='component-h1-modal'>Downloads</h1>
                {devices && devices.map(info => 
                    <div className="device" key={info.id}>
                        <img src={info.img} alt="" id="myimg" className="device-img"/>
                        <h4 className="device-name">{ info.device }</h4>
                        <p className="device-maintainer">By: { info.maintainer }</p>
                        <button className="download-button" onClick={ () => window.open('https://sourceforge.net/projects/project-arcana-releases/files/')}><img src={download} alt="" />Download</button>
                    </div>
                )}
                <button onClick={onClose} className="modal-button"> <strong>Close</strong></button>
            </div>
        </div>,
        document.getElementById('portal')
     );
}
 
export default DownloadModal;

// DownloadModal.js:22 note7pro
// DownloadModal.js:22 apollo
// DownloadModal.js:22 miatoll
// DownloadModal.js:22 santoni
// DownloadModal.js:22 begonia
// DownloadModal.js:22 lenovoz5s
// DownloadModal.js:22 juice
// DownloadModal.js:22 sweet
// DownloadModal.js:22 oneplus8t9r
// DownloadModal.js:22 rmx2170
// DownloadModal.js:22 ugglite
// DownloadModal.js:22 asusm1
// DownloadModal.js:22 mi8lite
// DownloadModal.js:22 lavender
// DownloadModal.js:22 mido
// DownloadModal.js:22 ginkgo
// DownloadModal.js:22 pocof1
// DownloadModal.js:22 surya
// DownloadModal.js:22 mi439
// DownloadModal.js:22 mohito
// DownloadModal.js:22 realmext
// DownloadModal.js:22 pocox2
// DownloadModal.js:22 alioth
// DownloadModal.js:22 raphael