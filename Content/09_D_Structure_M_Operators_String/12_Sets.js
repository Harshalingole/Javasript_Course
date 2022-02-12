// ----------- SETS--------------
// We wil use SETS when we need UNIQUE VALUES.
// Sets Do not have properties Duplicate
// There are no index in the Sets
// if your goal is to store value in order and retirve it then best usecase is array then there is no need to use sets
//Sets itme are iterable
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
]);
console.log(orderSet);

console.log(new Set('Jonas'));

// SETS METHOD
//----1) To check the size of an Sets
console.log(orderSet.size);
//----2) To check the size of an Sets
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
//----3) To Add item  in an Sets
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
//----4) To Delete the item of an Sets
orderSet.delete('Risotto');
// To clear All Sets item
// orderSet.clear()
console.log(orderSet);
console.log(orderSet[0]); // No index in Sets

for (const order of orderSet) console.log(order);

// Use Case Of Sets
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Now we want unique staff member
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
