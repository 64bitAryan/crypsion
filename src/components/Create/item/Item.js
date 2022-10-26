import React from 'react'
import '../Create.css'

const item = () => {
  return (
    <div className='mainContainer'>
    <div className='realtiveContainer'>
      <div className='contentWrapper'>
        <div className='createCollectionTitle'>Create Item</div>
        <div className='smallText'>Required field</div>
        <div className='smallBold'>Image, Video, Audio, or 3D Model</div>
        <div className='smallText'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</div>
        <div className='logoContainerImage'>
          <img className='logoImage'></img>
        </div>
        <div className='smallBold'>Name</div>
        <input className='nameInput' type='text' name='name' placeholder='Example-one punch man'/>
        <div className='smallBold'>Description</div>
        <div className='smallText'>Markdown syntax is supported. 0 of 1000 characters used.</div>
        <textarea className='descriptionInput'type='text' name='description' placeholder='description'/>
        <div className='smallBold'>Blockchain:Ethereum</div>
        <div className='tokenContainer'>
          <img className='tokenImage'></img>
        </div>
      </div>
      <button className='createButton'>Create</button>
    </div>
  </div>
  )
}

export default item