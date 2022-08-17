
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterComponent({filterDropdown})
{
    return (
        <>

<<<<<<< Updated upstream
            <select onChange={(e)=>filterDropdown(e.target.value)} className="form-select" aria-label="Default select example" style={{ width: '20%' }}>
=======


            <select className="form-select" aria-label="Default select example" style={{ width: '20%' }}>
>>>>>>> Stashed changes
                <option selected>Select Engineering type</option>
                <option value="SE">Software Engineering</option>
                <option value="DS">Data Science</option>
                <option value="CE">Cloud Engineering</option>
            </select>

        </>

    );
}

export default FilterComponent;
