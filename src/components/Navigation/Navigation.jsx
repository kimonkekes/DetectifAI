const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
      (isSignedIn) ? 
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
          <p className="f3 dim pa3 pointer" onClick={() => onRouteChange('signOut')}>Sign Out</p>
        </nav>
      : 
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
          <p className="f3 dim pa3 pointer" onClick={() => onRouteChange('signIn')}>Sign In</p>
          <p className="f3 dim pa3 pointer" onClick={() => onRouteChange('register')}>Register</p>
        </nav>
    )
}

export default Navigation