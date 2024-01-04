function ListGroup() {
  let items = ["New York", "San Francisco", "Izmir", "London", "Paris"];
  items = [];
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
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
