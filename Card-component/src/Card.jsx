import profilePic from "./assets/profile.jpg"

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="DP" ></img>
            <h2 className="card-title">Invincible</h2>
            <p className="card-text">I do coding and love playing games</p>
        </div>
    )
}

export default Card