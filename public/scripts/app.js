'use strict';

console.log('App JS is running!');

// var template = (
// <div>
//     <h1> Indecision App</h1>
//     <p> This is a paragraph</p>
// </div>
// ); 

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Justin Garavel'
    ),
    React.createElement(
        'p',
        null,
        'Age: 28'
    ),
    React.createElement(
        'p',
        null,
        'Location: Tokyo'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
