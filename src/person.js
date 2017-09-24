console.log('person.js is running...');

const isAdult = (age) => age >= 20;

const canDrink = (age) => age >= 20;

const isSeniorCitizen = (age) => age >= 65;

// export default isSeniorCitizen;
export { isAdult, canDrink, isSeniorCitizen as default };