import { useState } from "react";

interface Props {
    items : string[];
    heading : string;
    onselectedItem: (item:string)=>void;
}

function ListGroup({items,heading,onselectedItem}:Props) {
  const [selected_index,set_selected_index] = useState(null);
  const getMessage = () => {
    return items.length == 0 ? <p>no item found</p> : null;
  };
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item,index) => (
          <li 
             key={item} 
             className= {selected_index ==index?"list-group-item active":"list-group-item"}
             onClick={ () => {
                 set_selected_index(index);
                 onselectedItem(item);
            }}
             >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
