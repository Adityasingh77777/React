function ProfilePicture(){
    const imageUrl= './src/assets/profile.jpg';
    const handleClick= (e)=>{
        e.target.style.display = "none"
    }
    
    return (

        <img src={imageUrl} alt= "img chud gya" onClick={(e)=>{handleClick(e)}} />
    )
}

export default ProfilePicture