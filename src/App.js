//import logo from './logo.svg';
import './App.css';
import icon from './assets/icon.png'
import favicon from './assets/favicon.png'
import { useState, useEffect } from 'react';

/* We import the component to display our items */
import { DisplayItems } from './components/DisplayItems'

/* We import our JSON file, the format :
    - the first array of object needs to be called 'items'
    - item must have a 'name' property
    - if it's a link, add a 'link' property with the url for value
    - if it has children items, it needs a property 'items' as an array of objects
*/
import { dataJSON } from "./content"


function App() {
  const [data, setData] = useState();

  const getApiData = () => {
    setData(dataJSON);
  };

  useEffect(() => {
    getApiData();
  }, []);

  /* We fill the items property with the JSON on the first DisplayItems (at the root) */
  const items = (data && data.items) || []

  return (
    <div className="App">
      <img  class="mainImage" src={favicon} alt="logo Chanel"/>
      <img  class="mainImage" src={icon} alt="Chanel"/>
      <DisplayItems items={items} />
    </div>
  );
}

export default App;
