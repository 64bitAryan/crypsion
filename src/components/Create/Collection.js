import React from 'react'

function Collection() {
  return (
    <div>
        <p>Create Collection</p>
        <h4>* Required Fields</h4>
        <p>Logo Image</p>
        <h5>This image will also be used for navigation. 350 x 350 recommended.</h5>
        <input className='logo-img-import'></input>
        <p>Banner Image</p>
        <h5>This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 350 recommended.</h5>
        <input className='banner-img-import'></input>
        <input className='collection-name-input' placeholder='Item Name'></input>
        <div className='collection-description'>
            <p>Description</p>
            <h3>Markdown syntax is supported. 0 of 1000 characters used.</h3>
            <input className='description-box'></input>
        </div>
        <p>Blockchain :: Ethereum</p>

        <p>Payment Tokens</p>
        <h4>These tokens can be used to buy and sell your items.</h4>

        <p className='eth-token'>ETH <br>Ethereum</br></p>

        <button className='Create-btn'>Create</button>
    </div>
  )
}

export default Collection