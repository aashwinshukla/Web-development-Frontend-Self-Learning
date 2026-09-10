function List(){

    const fruits = [{id: 1 ,name: "apple", calories: 95}, 
                    {id: 2 ,name: "orange", calories: 45}, 
                    {id: 3 ,name: "banana", calories: 105},
                    {id: 4 ,name: "cocnut", calories: 159}, 
                    {id: 5 ,name: "pineapple", calories: 37}];

    fruits.sort((a, b)=> a.name.localeCompare(b.name));
//  fruits.sort((a, b)=> a.name.localeCompare(a.name));  for reverse order
    fruits.sort((a, b)=> a.calories - b.calories);
//  fruits.sort((a, b)=> b.calories - a.calories);   for reverse order

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 );
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100 );
    
    const listItems1 = fruits.map(fruit => <li key = {fruit.id}>
                                            {fruit.name}: &nbsp; 
                                            <b>{fruit.calories}</b></li>);

    
    const listItems2 = lowCalFruits.map(lowCalFruit => <li key = {lowCalFruit.id}>
                                            {lowCalFruit.name}: &nbsp; 
                                            <b>{lowCalFruit.calories}</b></li>);
   
    const listItems3 = highCalFruits.map(highCalFruit => <li key = {highCalFruit.id}>
                                            {highCalFruit.name}: &nbsp; 
                                          <b>{highCalFruit.calories}</b></li>);
    //return (<ol>{listItems1}</ol>);
    //return (<ol>{listItems2}</ol>);
    return (<ol>{listItems3}</ol>);
     
}

export default List