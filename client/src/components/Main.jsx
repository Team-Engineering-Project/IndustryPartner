import { useEffect, useState } from "react";

import FilterComponent from "./FilterComponent";
import ProfileCardComponent from "./ProfileCardComponent";

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
        const filteredGraduates = originalGrads.filter(graduate => graduate.dfSubject === dfSubject)
        setGraduates(filteredGraduates)
    }

    return (
        <div style={{ position: 'center' }}>
            <div className="header" style={{ margin: '30px' }}>

                <h1>Talent spotlight</h1>
                <p>At Digital Futures we're focused on improving diversity within the technology sector, helping organisations build high-performing technology teams representative of society. Below is a selection of our engineers who have recently graduated from the Digital Academy and are immediately available to join your organisation </p>
                <br>
                </br>
                <div style={{ display: 'flex', justifyContent: 'left', padding: '40px', borderRadius: '5px', backgroundColor: "white", }}>
                    <FilterComponent filterDropdown={filterDropdown}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', borderRadius: '5px', backgroundColor: "white" }}>
                    {graduates && graduates.map((graduate) =>
                    {
                        return <ProfileCardComponent key={graduate._id} graduate={graduate} />
                    })}


                </div>

            </div >
        </div >
    )

}

export default Main;