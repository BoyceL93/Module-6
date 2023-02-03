const cohort = {
    name: 'November 2022',
    id: 2374,
    students: ['Felipe', 'Filopp', 'Granville', 'Schwarma']
};

const register = (obj) => {
    console.log(`${obj.id} - ${obj.name} - ${obj.students.length} students in this cohort `)
};

register(cohort);
