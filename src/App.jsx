import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  const onInputChange = (event) => {
    console.log(event.target.value)
  }

  const onButtonSubmit = () => {
    console.log('click');
  }

  return (
    <>
    <div className='App'>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={onInputChange} 
        onButtonSubmit={onButtonSubmit} />
      {/* <FaceRecognition /> */}
    </div>
    <ParticlesBg className='particles' type='cobweb' bg={true} />
    </>
  )
}

export default App