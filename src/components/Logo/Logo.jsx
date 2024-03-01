import Tilt from 'react-parallax-tilt';
import detLogo from '../../assets/detLogo.png'


const Logo = () => {
    return (
      <div className='ml5 w4'>
        <Tilt className='br2 shadow-2'>
          <div style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }}>
            <img src = {detLogo} alt='logo'></img>
          </div>
        </Tilt>

      </div>
    )
}

export default Logo