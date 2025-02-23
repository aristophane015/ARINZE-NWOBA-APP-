function filterPersons(persons, personType, criteria) {
    return persons.filter(function (person) {
        if (person.type !== personType)
            return false;
        return Object.entries(criteria).every(function (_a) {
            var key = _a[0], value = _a[1];
            return person[key] === value;
        });
    });
}
var persons = [
    { type: 'user', name: 'Arinze', age: 28 },
    { type: 'user', name: 'Nwoba', age: 38 },
    { type: 'admin', role: 'hardware Engineer', permissions: ['read', 'code'] },
    { type: 'admin', role: 'executive Manager', permissions: ['read'] },
];
var usersFiltered = filterPersons(persons, 'user', { age: 28 }); // User[]
var adminsFiltered = filterPersons(persons, 'admin', { role: 'executive" Manager' }); // Admin[]
console.log(usersFiltered);
console.log(adminsFiltered);
