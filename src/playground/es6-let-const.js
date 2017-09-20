var nameVar = 'Justin';
nameVar = 'Jeremy';
console.log('nameVar', nameVar);

let nameLet = 'Jenny';
// let nameLet = 'Julie'; <-- can't do this
console.log('nameLet', nameLet);

const nameConst = 'Fred';
// nameConst = 'Ferdie'; // <-- can't do this
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Bernie';
  return petName;
}

getPetName();
console.log(petName); // <-- can't do this. let and const are ALSO function scoped.