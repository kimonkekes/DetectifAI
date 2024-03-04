const FaceRecognition = ({ imageURL }) => {
    return (
        <div className='center ma'>
          <div className="absolute mt2">
            <img alt='image from URL' src={imageURL} width='500px' height='auto' />
          </div>
        </div>
    )
}

export default FaceRecognition