import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import './App.css'

function App() {


  return (
    <>
    <div className='App'>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
    <ParticlesBg className='particles' type='cobweb' bg={true} />
    </>
  )
}

export default App
