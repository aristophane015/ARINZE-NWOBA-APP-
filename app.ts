type User = {
    type: 'user';
    name: string;
    age: number;
  };
  
  type Admin = {
    type: 'admin';
    role: string;
    permissions: string[];
  };
  
  type Person = User | Admin;
  
  type FilterCriteria<T> = Partial<Omit<T, 'type'>>;
  
  function filterPersons<T extends 'user' | 'admin'>(
    persons: Person[],
    personType: T,
    criteria: FilterCriteria<T extends 'user' ? User : Admin>
  ): (T extends 'user' ? User : Admin)[] {
    return persons.filter((person) => {
      if (person.type !== personType) return false;
      return Object.entries(criteria).every(([key, value]) => {
        return (person as any)[key] === value;
      });
    }) as any;
  }
  
  
  const persons: Person[] = [
    { type: 'user', name: 'Arinze', age: 28 },
    { type: 'user', name: 'Nwoba', age: 38 },
    { type: 'admin', role: 'hardware Engineer', permissions: ['read', 'code'] },
    { type: 'admin', role: 'executive Manager', permissions: ['read'] },
  ];
  
  const usersFiltered = filterPersons(persons, 'user', { age: 28 }); // User[]
  const adminsFiltered = filterPersons(persons, 'admin', { role: 'executive Manager' }); // Admin[]
  
  console.log(usersFiltered);
  console.log(adminsFiltered);
