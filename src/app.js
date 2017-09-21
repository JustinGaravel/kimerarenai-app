class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Let the internet decide for you!</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?!</button>
      </div>
    );
  }
}

// Options class -> options component here
class Options extends React.Component {
  render() {
    return (
      <div>
        <p>
          Options component goes HERE
        </p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>
          Options component goes HERE
        </p>
      </div>
    )
  }
}

// AddOption class -> add option component here

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
    
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
