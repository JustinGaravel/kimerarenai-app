console.log('person.js is running...');

const isAdult = (age) => {
  if (age >= 20) {
    return true;
  }
  return false;
}

const canDrink = (age) => {
  if (age >= 20) {
    return true;
  }
  return false;
}

export { isAdult, canDrink };