import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import ParticlesBg from 'particles-bg'
import './App.css'

const initialState = {id: '',
                      name: '',
                      email: '',
                      entries: 0,
                      joined: ''
                      }

function App() {
  const [input, setInput] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signIn')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState(initialState)

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setBox(box)
  }

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onPictureSubmit = () => {
    setImageURL(input)
    fetch('https://detectifai-api.onrender.com/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: input
          })
        })
    .then(response => response.json())
    .then(result => {
      if (result) {
        fetch('https://detectifai-api.onrender.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            setUser({...user, entries: count})
          })
          .catch(console.log)
      }
      displayFaceBox(calculateFaceLocation(result))
    })
    .catch(error => console.log('error', error));
  }

  const onRouteChange = (route) => {
    if (route === 'signOut') {
      setIsSignedIn(false)
      setUser(initialState)
      setImageURL('')
    } else if (route === 'home') {
        setIsSignedIn(true)
    }
    setRoute(route)
  }

  return (
    <>
    <div className='App'>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      <Logo />
      { route === 'home' ?
          <> 
          <Rank name={user.name} entries={user.entries}/>
          <ImageLinkForm 
            onInputChange={onInputChange} 
            onPictureSubmit={onPictureSubmit} />
          <FaceRecognition box={box} imageURL={imageURL} />
          </>
        : (
          route === 'signIn' ?
            <SignIn onRouteChange={onRouteChange} loadUser={loadUser}/>
          :
            <Register onRouteChange={onRouteChange} loadUser={loadUser}/>
        )  
      }
    </div>
    <ParticlesBg className='particles' type='cobweb' bg={true} />
    </>
  )
}

export default App