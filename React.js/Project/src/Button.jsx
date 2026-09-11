function Button(){
    
    let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} You clicked me ${count} time/s`);
    //     }else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    // const handleClick = (e) => console.log(e);

    const handleClick = (e) => e.target.textContent = "OUCH!"

    // return <button onClick = {(e) => handleClick(e)}>Click me</button>
    return <button onDoubleClick = {(e) => handleClick(e)}>Click me</button>
}

export default Button