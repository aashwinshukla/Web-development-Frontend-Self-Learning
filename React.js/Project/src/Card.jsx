import profilePic from './assets/vite.svg'
function Card(){

    return(
        <div className = "card">
            <img className = "card-img" src = {profilePic} alt = "profile picture"></img>
            <h2 className="card-title">Aashwin Shukla</h2>
            <p className="card-text">Learing Frontend, and Playing Games</p>
        </div>
    );
}

export default Card