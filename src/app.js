console.log('App JS is running!');

// var template = (
// <div>
//     <h1> Indecision App</h1>
//     <p> This is a paragraph</p>
// </div>
// ); 

var templateTwo = (
    <div>
        <h1>Justin Garavel</h1>
        <p>Age: 28</p>
        <p>Location: Tokyo</p>        
    </div>
    ); 

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);