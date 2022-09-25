import React from 'react'

function item() {
  return (
    <div>
        <button className='create-item'>Create Item</button>
    <div>
        <p>Create Item</p>
        <h4>* Required Fields</h4>
        <h4>Image, Video, Audio, or 3D Model *</h4>
        <h5>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</h5>
        <input className='item-name-input' placeholder='Item Name'></input>
        <div className='description'>
            <p>Description</p>
            <h3>Markdown syntax is supported. 0 of 1000 characters used.</h3>
            <input className='description-box'></input>
        </div>
        <p>Blockchain :: Ethereum</p>

        <button className='Create-btn'>Create</button>
    </div>
    </div>
  )
}

export default item