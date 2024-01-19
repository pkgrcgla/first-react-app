import { useState } from "react";

//import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Izmir", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];
  //   if (items.length == 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No items found</p>
  //       </>
  //     );
  return (
    <>
      <h1>List</h1>
      {/* {items.length == 0 ? <p>No item found</p> : null} */}
      {/* eğer ilk condition true dönüyorsa &&dan sonrasını yazdırır. eğer false dönüyorsa hiç bir şey yapmaz */}
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
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
