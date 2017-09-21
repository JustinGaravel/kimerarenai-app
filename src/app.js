class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle ="Let the internet decide for you!";
    const options = ['Thing One', 'Thing Two', 'Thing Four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {this.props.options.length}
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    )
  }
}

// Option class -> option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
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

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
    
  </div>
);

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
