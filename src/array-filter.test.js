
import { fiveAndGreaterOnly, evensOnly, ofAge, peopleWhoBelongToTheIlluminati, fiveCharactersOrFewerOnly } from './array-filter';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('evens only', () => {
    const input = [3, 6, 8, 2]; 
    const output = evensOnly(input); 
    expect(output).toEqual([6, 8, 2]); 
});

test('five characters or fewer only', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; 
    const output = fiveCharactersOrFewerOnly(input); 
    expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']); 
  });

test('people who belong to the illuminati', () => {
    const input = [

        { name: 'Angelina Jolie', member: true },
        { name: 'Eric Jones', member: false },
        { name: 'Paris Hilton', member: true },
        { name: 'Kayne West', member: false },
        { name: 'Bob Ziroll', member: true }
    ]; 

    const output = peopleWhoBelongToTheIlluminati(input); 
    expect(output).toEqual([ 

        { name: 'Angelina Jolie', member: true }, 
        { name: 'Paris Hilton', member: true }, 
        { name: 'Bob Ziroll', member: true } 

    ]); 
})

test('people old enough to see the Matrix', () => {
    const input = [

        { name: 'Angelina Jolie', age: 80 },
        { name: 'Eric Jones', age: 2 },
        { name: 'Paris Hilton', age: 5 },
        { name: 'Kayne West', age: 16 },
        { name: 'Bob Ziroll', age: 100 }
    ]; 

    const output = ofAge(input); 
    expect(output).toEqual([ 

        { name: 'Angelina Jolie', age: 80 }, 
        { name: 'Bob Ziroll', age: 100 } 
        
    ]); 
})