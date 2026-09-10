import PropTypes from 'prop-types'

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {
    const WelcomeMsg = <h2 className="welcome-msg">Welcome {username}</h2>;
    const LogIn = <h2 className="logIn">Please log in to continue</h2>;

    return (isLoggedIn ? WelcomeMsg : LogIn);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting