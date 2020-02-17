const node = {
    id: 'foo',
    type: 'Identifier',
};

const { type, id } = node;
console.log(type); // "Identifier"
console.log(id); // "foo”

// compile error when --noImplicitAny is set
// let showName = function( { id } ){
// tslint:disable-next-line:no-shadowed-variable
const showName = ({ id }: { id: string }) => {
    console.log(id);
};
showName(node); // "foo”
showName({ id: 'baz' }); // "baz"

/* compile error
showName({id:10})
*/
const showName2 = ({ id, extra }: { id: string; extra: string }) => {
    console.log(id);
    console.log(extra);
};

/* compile error - this would work in EcmaScript!
showName2(node)
*/

const input = [1, 2, 3];
// create NEW variables first and second
const [fst, snd] = input;
console.log(fst);
console.log(snd);

// remaining items in a list using the syntax ...name :
const [firstelement, ...remainder] = [1, 2, 3, 4];
console.log(firstelement); // outputs 1
console.log(remainder); // outputs [ 2, 3, 4 ]

// Nested destructuring of Tuples/arrays. Only have a binding for the named item
const justanarray: [string, boolean, number[]] = ['data', true, [3, 4]];
const [, , [, elem2]] = justanarray;
console.log(`Nested element in array ${elem2}`);

// Nested destructuring of objects
const nestedobject = { anumber: 100, nested: { deep: 'ok' } };
const {
    nested: { deep },
} = nestedobject;
// compile error: only names "on the right"  of the expression are declared
// console.log(nested)
console.log(deep);
// variable renaming; confusing syntax!
const {
    nested: { deep: deepest },
} = nestedobject;
console.log(deepest);
