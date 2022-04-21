import { useEffect, useState } from "react";
import Firebase from './Firebase';

const DLCount = () => {

    //SOURCEFORGE
    const [sourceforge, setSourceforge] = useState();
    //Firebase
    const [maintainers, setMaintainers] = useState([]);

    function updateSourceforge(){
        //Set the date so it would be latest no matter what.
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        //Fetch data from sourceforge API
        // fetch('https://sourceforge.net/projects/project-arcana-releases/files/stats/json?start_date=2021-10-29&end_date=2022-04-16')
        fetch(`${process.env.REACT_APP_SF}?start_date=2021-10-29&end_date=${year}-${month}-${day}`)
            .then(res => {return res.json()})
            .then(data => {setSourceforge(data)})
    }

    function totalCalculator(x){
        let total = [];
        x.map(element => {
            total.push(element[1])
        });
        return total.reduce((x, y) => x + y, 0).toLocaleString();
    }

    useEffect(() => {
        updateSourceforge();
    }, [])

    return (
        <>
            <h1 className='component-h1' id="stats">Stats</h1>
            <div className="download-count-wrapper" id="DLCount">
                <Firebase state={ setMaintainers }/> {/* Call the firebase function and pass the useState or array*/}
                <div className="download-upper-section">
                    <div className="download-countries">
                        <h1>Top countries by downloads</h1>
                        <h4>Around the world!</h4>
                        {sourceforge && sourceforge.countries.slice(0,5).map((element) => 
                            <h2 key={element[0]}>{ element[0] }</h2>
                        )}
                    </div>
                    <div className="download-supported-devices">
                        <h1>Supported devices</h1>
                        <h4>Arcana running devices</h4>
                        {maintainers && <h2 className="download-highlight">{ maintainers.length }</h2>}
                    </div>
                    <div className="download-maintainer-count">
                        <h1>Arcana magicians</h1>
                        <h4>Maintainer count</h4>
                        {maintainers && <h2 className="download-highlight">{ maintainers.length }</h2>}
                    </div>
                </div>
                <div className="download-count">
                    <h1>Download counts</h1>
                    <h4>via SourceForge</h4>
                    {sourceforge && <h2 className="download-highlight">{ (totalCalculator(sourceforge.downloads)) }+</h2>}
                </div>
            </div>
        </>
     );
}
 
export default DLCount;