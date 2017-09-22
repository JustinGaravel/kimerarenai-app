
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Thing One', 'Thing Two', 'Thing Four', 'Thing Three']
    }
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    
  }

handleDeleteOptions() {
  this.setState(() => {
    return {
      options: []
    }
  });
}

// handlePick - pass down to action
// bind ^ here
// setup onClick to work.
// randomly pick an option and alert it
handlePick () {
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];
  alert(option);
}
  render() {
    const title = 'Indecision App';
    const subtitle ="Let the internet decide for you!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?!
        </button>
      </div>
    );
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      
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


// set up form as same in jsx-indecision
// wire up onSubmit
// call a method -> handleAddOption
//   fetch value typeed -> if exist, alert it to screen
class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
      e.target.elements.option.value = '';      
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
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
