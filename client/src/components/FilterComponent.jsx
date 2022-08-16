
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterComponent() {
    return (
        <>

            <select class="form-select" aria-label="Default select example" style={{ width: '20%' }}>
                <option selected>Select Engineering type</option>
                <option value="1">Software Engineering</option>
                <option value="2">Data Science</option>
                <option value="3">Cloud Engineering</option>
            </select>

        </>

    );
}

export default FilterComponent;
