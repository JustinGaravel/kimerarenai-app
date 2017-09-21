const app = {
  title:'Visibility App'
}

let buttonText = "Show Details";
let buttonDisplayToggle = false;
const showDetailsToggle = () => {
  if (buttonText === 'Show Details') {
    buttonDisplayToggle = true;
    buttonText = 'Hide Details';
  } else {
    buttonDisplayToggle = false;
    buttonText = "Show Details";
  }
  render();
};

const appRoot = document.getElementById('app');


const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button id="button" onClick={showDetailsToggle}>{buttonText}</button>
      { buttonDisplayToggle ? <div id="details">The deets are displayed here.</div> : '' }
    </div>
    );
  
  ReactDOM.render(template, appRoot);
};

render();
