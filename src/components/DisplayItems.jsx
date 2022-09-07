import React, { memo, useCallback, useState } from 'react'
import './DisplayItems.css'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill }  from "react-icons/bs";

/* We use memo so if a props in this component doesnt change, it will be not rerender */
const DisplayItems = memo(({ items, hideSelf }) => {

  /* The innerItems variable is an array, that will be fill with objects saved in 'items' property in our JSON,
     each DisplayItems component have one.
  */
  const [innerItems, setInnerItems] = useState([])

  /* The currIndex helps us to know which "child" has been choose, to show its items */
  const [currIndex, setCurrIndex] = useState();

  /* The display function will fill the array InnerItems with the subItems of the current item,
     We use useCallBack so it will recreate the display function if it needs to.
  */
  const display = useCallback(index => {
    setInnerItems(items[index].items);
    setCurrIndex(index);
  }, [setInnerItems, items, setCurrIndex])

  /* We render each of us items by using map */
  return items.map((item, index) => (
    <div class="item-container">
      
      {
        /* We display the prev button only on the first item (all child have the same parent on one level),
           also, we check if the function anonymous function "hideSelf" exist (the root doesnt have one),
        */
        hideSelf && innerItems.length === 0 && index === 0 &&
        <span class="prevBtn" onClick={hideSelf}><BsFillArrowLeftSquareFill/></span>
      }

      {/* If innerItems is not empty, we set its display on block to show it */}
      <div key={index}  style={{ display: innerItems.length ? 'none' : 'block' }}>
        {
          /* We use a ternary condition to set the item name as a link if it has the property 'link',
            if not, it's only a span tag
          */
          item.link ? <span><a href={item.link} >{item.name}</a></span> : <span>{item.name}</span>
        }
        {
          /* if the current item has a 'items' property, we can add a button to call the display function with its index  */
          item.items && 
          <span class="nextBtn" onClick={() => display(index)}><BsFillArrowRightSquareFill /></span>
        }
      </div>
      {
        /* We create a new DisplayItems component, only if the property 'items' exist,
           the anomymous function 'hideSelf' will set InnerItems to an empty array, if it is called
        */
        item.items && index === currIndex &&
        <DisplayItems items={innerItems} hideSelf={() => setInnerItems([])} /> 
      }
    </div>
  )
)})

export { DisplayItems }
