import './FaceRecognition.css'

const FaceRecognition = ({ imageURL, boxes }) => {
    return (
        <div className='center ma'>
          <div className="absolute mt2">
            {imageURL ?
              <img id='inputImage' alt='image from URL' src={imageURL} width='500px' height='auto' /> 
                : 
              null
            }
            {boxes.map(box => {
              return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            })}
          </div>
        </div>
    )
}

export default FaceRecognition