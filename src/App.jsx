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

function App() {
  const [input, setInput] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signIn')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState({id: '',
                                    name: '',
                                    email: '',
                                    entries: 0,
                                    joined: ''
                                  })
  
  const PAT = '54a0b0f3ef2b4725aa2abe3e5e0e82d4'
  const USER_ID = 'kimon'
  const APP_ID = 'image-detection'
  const MODEL_ID = 'face-detection'

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

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": input
                  }
              }
          }
      ]
  });
  
  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result) {
        fetch('http://localhost:3000/image', {
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
      }
      displayFaceBox(calculateFaceLocation(result))
    })
    .catch(error => console.log('error', error));
  }

  const onRouteChange = (route) => {
    if (route === 'signOut') {
      setIsSignedIn(false)
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