import Tilt from 'react-parallax-tilt';
import detLogo from '../../assets/detLogo.png'
import detTitle from'../../assets/detTitle.png'


const Logo = () => {
    return (
      <div className='flex items-center'>
      <div className='ml5 w4'>
        <Tilt className='br2 shadow-2'>
          <div style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }}>
            <img src = {detLogo} alt='logo'></img>
          </div>
        </Tilt>
      </div>
      <div className='ml5'>
        <img src = {detTitle} alt='title'></img>
      </div>
      </div>
    )
}

export default Logo