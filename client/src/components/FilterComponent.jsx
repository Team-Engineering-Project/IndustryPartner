
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterComponent() {
    return (
        <>
            {/* <Dropdown>
                <h4>Engineer type</h4>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Select Engineer
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                        Software Engineer
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Data Science</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Cloud Engineer</Dropdown.Item>
                    <Dropdown.Divider />
                </Dropdown.Menu>
            </Dropdown> */}
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
