import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


/* ---------- */

class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
  getGreeting() {
    return `hi my name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

/* ------------ */

class NewSyntax {
  name = "Jennifer"
}

const newSyntax = new NewSyntax();
console.log(newSyntax);