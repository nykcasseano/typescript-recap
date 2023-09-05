interface Person {
    firstName: string,
    lastName: string,
    job: job
}

type job = 'Engineer' | 'Programmer'

function generateEmail(input: Person): string {
    return `${input.firstName}.${input.lastName}@email.com`

}

console.log(generateEmail({
    firstName:"Joãozinho",
    lastName: 'Da Silva',
    job: 'Engineer'
}));