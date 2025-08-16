import PropTypes from 'prop-types';

function UserGreeting({username="Guest",isLoggedIn="false"}){
    // if(props.isLoggedIn){
    //     return(
    //         <h2>Welcome {props.username}</h2>
    //     )

    // }
    // <h2>Please Login to continue</h2>

    const welcomeMessage= <h2 className="welcome-message">
        Welcome {username}
    </h2>

    const loginPrompt= <h2 className="login-prompt">
        Please Login to continue
    </h2>

    return(isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.proptypes ={
    isLoggedIn:PropTypes.bool,
    userName:PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest"
}

export default UserGreeting