import './ImageLinkForm.css' 

const ImageLinkForm= ({ onInputChange, onButtonSubmit }) => {
    return (
      <div className='ml5'>
        <p className='f3 tc'>
          {'Instant AI face detection. Paste image URL below'}
        </p>
        <div className='center'>
          <div className="form center pa4 br3 shadow-5">
            <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
            <button 
              className='w-30 grow center f4 ph3 pv2 dib white bg-light-purple'
              onClick={onButtonSubmit}
            >Detect</button>
          </div>
        </div>
      </div>
    )
}

export default ImageLinkForm