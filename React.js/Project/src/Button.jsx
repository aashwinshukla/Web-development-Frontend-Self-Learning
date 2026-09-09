// Inline style 

function Button(){
    const styles = {
            backgroundColor: "rgb(248, 15, 252)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",

    }

    return(
        <button style = {styles}>Click</button>
    );
}

export default Button