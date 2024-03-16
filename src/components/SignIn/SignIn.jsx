import { Component } from 'react'

class SignIn extends Component{
  constructor(props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://detectifai-api.onrender.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        } 
      })
  }

  render() {
    const { onRouteChange } = this.props
    return (
      <article className="br3 ba b--black-10 bg-lightest-blue mv4 w-100 w-50-m w-25-l mw6 shadow-5 center tc"> 
        <main className="pa4 black-80">
          <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input 
                    className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" name="email-address"  id="email-address"
                    onChange={this.onEmailChange} 
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                    className="b pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" name="password"  id="password"
                    onChange={this.onPasswordChange} 
                  />
                </div>
              </fieldset>
            <div className="">
                <input className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                       onClick={this.onSubmitSignIn} type="submit" value="Submit" />
            </div>
            <div className="lh-copy mt5">
                <p onClick={() => onRouteChange('register')} className="f5 link dim black pointer db">First time user? Register here</p>
            </div>
          </div>
        </main>
      </article>
    )
    }  
}

export default SignIn