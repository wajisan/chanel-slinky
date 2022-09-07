# How to run

### `npm install`
It will install the node modules that you need.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Important files

### src/content.js
Here where to change the JSON data

### src/App.js
the main component to render our App

### src/components/DisplayItems.jsx
the component used recursively to display our JSON tree based on the "items" property


# JSON Format
- the first array of object needs to be called 'items'
- item must have a 'name' property
- if it's a link, add a 'link' property with the url for value
- if it has children items, it needs a property 'items' as an array of objects
