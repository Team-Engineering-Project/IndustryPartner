import { useEffect, useState } from "react";

import FilterComponent from "./FilterComponent";
import ProfileCardsComponent from "./ProfileCardsComponent";

function Main()
{
    const [graduates, setGraduates] = useState(null);
    const [originalGrads, setOriginalGrads] = useState(null);
    
    useEffect(() =>
    {
        const getGraduates = async () =>
        {
            const response = await fetch('http://localhost:4000/graduates')
            const graduatesData = await response.json();
            if (response.ok)
            {
                setGraduates(graduatesData);
                setOriginalGrads(graduatesData);
                //console.log(graduatesData);
            }
        }
        getGraduates();
    }, [])

    const filterDropdown = (dfSubject) => {
        if (dfSubject === ""){
            setGraduates(originalGrads);
        } else {
            const filteredGraduates = originalGrads.filter(graduate => graduate.dfSubject === dfSubject)
            setGraduates(filteredGraduates);
        }
    }

    return (
        <div style={{ display: 'grid', placeContent: 'center' }}>
            <div className="header" style={{ maxWidth: '980px' }}>
                <h1>Talent spotlight</h1>
                <p style={{ color: "grey" }}>At Digital Futures we're focused on improving diversity within the technology sector, helping organisations build high-performing technology teams representative of society. Below is a selection of our engineers who have recently graduated from the Digital Academy and are immediately available to join your organisation </p>
                <br></br>
            </div>
            <div style={{ justifyContent: 'left', padding: '45px', borderRadius: '5px', backgroundColor: "white" }}>
                <p style={{ color: "grey" }}>Engineer type:</p>
                <FilterComponent filterDropdown={filterDropdown}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', borderRadius: '5px', backgroundColor: "white" }}>
                {graduates && <ProfileCardsComponent graduates={graduates} />}
            </div>

        </div >

    )

}

export default Main;