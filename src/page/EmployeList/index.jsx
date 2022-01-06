import { DataTable } from 'projet14-datatable';
import { Link } from 'react-router-dom';

import './style.css';
function EmployeList() {
    const employees = JSON.parse(localStorage.getItem('employees'));
    return (
        <div id="employee-div" className="EmployeList container">
            <h3>Current Employees</h3>
            <DataTable
                data={employees}
                columns={[
                    { title: 'First Name', data: 'firstName' },
                    { title: 'Last Name', data: 'lastName' },
                    { title: 'Start Date', data: 'startDate' },
                    { title: 'Department', data: 'department' },
                    { title: 'Date of Birth', data: 'dateOfBirth' },
                    { title: 'Street', data: 'street' },
                    { title: 'City', data: 'city' },
                    { title: 'State', data: 'state' },
                    { title: 'Zip Code', data: 'zipCode' },
                ]}
            />
            <Link to="/">Home</Link>
        </div>
    );
}

export default EmployeList;

/*
const employees = JSON.parse(localStorage.getItem('employees'));

    $('#employee-table').DataTable({
        data: employees,
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    });

    */
