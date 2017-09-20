console.log('App JS is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'This is the subtitle',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderDecisionApp();    
  }
};

const removeAll = (e) => {
  app.options = [];
  renderDecisionApp();
};

const appRoot = document.getElementById('app');

const renderDecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p> }
      <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
    ); 
  ReactDOM.render(template, appRoot);
};

renderDecisionApp();