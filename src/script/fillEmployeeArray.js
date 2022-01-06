import { states } from './state';

function getADate() {
    return `${Math.floor(Math.random() * 30)}/${Math.floor(
        Math.random() * 12
    )}/${Math.floor(Math.random() * 50) + 1970}`;
}
export function fillEmployeeArray() {
    const name = [
        'william',
        'charles',
        'robert',
        'emilie',
        'julie',
        'sarah',
        'jean',
        'paul',
        'julien',
        'quentin',
        'kevin',
        'gaeten',
        'sebastien',
        'virginie',
        'louise',
        'eva',
        'manon',
    ];
    const lastName = [
        'Valjean',
        'Franc',
        'De la house',
        'Eluard',
        'Rimbaud',
        'Hugo',
        'Sartre',
        'Macron',
        'Sarkozy',
        'RObert',
        'Mitterand',
        'Balladur',
    ];
    const street = [
        "rue de l'horloge",
        'rue du pauvre',
        'rue du chameau',
        'rue du champ de mars',
        'rue royale',
    ];
    const city = [
        'Orléans',
        'Rennes',
        'Loudeac',
        'Brest',
        'Paris',
        'Marseille',
        'Bordeau',
    ];
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    for (let i = 0; i < 1000; ++i) {
        let randomiser = Math.floor(Math.random() * 999),
            dep = (randomiser % 98) + 1,
            zip = `${dep}${(randomiser % 998) + 1}`;
        const employee = {
            firstName: name[randomiser % name.length],
            lastName: lastName[randomiser % lastName.length],
            dateOfBirth: getADate(),
            startDate: getADate(),
            department: dep,
            street: street[randomiser % street.length],
            city: city[randomiser % city.length],
            state: states[randomiser % states.length].abbreviation,
            zipCode: zip,
        };
        employees.push(employee);
    }
    console.log(JSON.stringify(employees));
    localStorage.setItem('employees', JSON.stringify(employees));
}
