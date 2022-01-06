import './style.css';
import { states } from '../../script/state';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modale from '../Modale';
function Formulaire() {
    const [modal, setModal] = useState(false);
    const date = new Date(Date.now());
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const MAX_DATE_STRING = `${date.getFullYear()}-${
        month < 10 ? '0' + month : month
    }-${day <= 9 ? '0' + day : day}`;
    function handleSubmit(e) {
        e.preventDefault();
        if (document.forms['create-employee'].checkValidity()) {
            const firstName = document.getElementById('first-name');
            const lastName = document.getElementById('last-name');
            const dateOfBirth = document.getElementById('date-of-birth');
            const startDate = document.getElementById('start-date');
            const department = document.getElementById('department');
            const street = document.getElementById('street');
            const city = document.getElementById('city');
            const state = document.getElementById('state');
            const zipCode = document.getElementById('zip-code');

            const employees =
                JSON.parse(localStorage.getItem('employees')) || [];
            const employee = {
                firstName: firstName.value,
                lastName: lastName.value,
                dateOfBirth: dateOfBirth.value,
                startDate: startDate.value,
                department: department.value,
                street: street.value,
                city: city.value,
                state: state.value,
                zipCode: zipCode.value,
            };
            employees.push(employee);
            localStorage.setItem('employees', JSON.stringify(employees));
            setModal(true);
        }
    }

    return (
        <div className="Formulaire container">
            <Link to="employee">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="" method="dialog" id="create-employee" target="_self">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" required />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" required />
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input
                    required
                    id="date-of-birth"
                    type="date"
                    max={MAX_DATE_STRING}
                />
                <label htmlFor="start-date">Start Date</label>
                <input
                    required
                    id="start-date"
                    type="date"
                    max={MAX_DATE_STRING}
                />
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
                        {states.map((state, index) => (
                            <option
                                key={`${index}${state}`}
                                value={state.abbreviation}
                            >
                                {state.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>
                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <input
                    id="submit"
                    type="submit"
                    onClick={handleSubmit}
                    value="Save"
                />
            </form>
            <Modale visible={modal} SetState={setModal}>
                <p>Employee Created!</p>
            </Modale>
        </div>
    );
}

export default Formulaire;
