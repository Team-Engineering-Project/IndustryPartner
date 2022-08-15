
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterComponent() {
    return (
        <>
            <Dropdown>
                <h4>Engineer type</h4>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Software Engineering
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                        Software Engineering
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Data Science</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Cloud Engineer</Dropdown.Item>
                    <Dropdown.Divider />
                </Dropdown.Menu>
            </Dropdown>

        </>

    );
}

export default FilterComponent;
