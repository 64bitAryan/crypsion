import React from 'react'
import './Collection.css';

const Collection = () => {
  return (
    <div className='mainContainer'>
      <div className='realtiveContainer'>
        <div className='shiftButtons'>
          <div className='flex-child-element createCollection'>Create a Collection</div>
          <div className='flex-child-element createItem'>Create a new Item</div>
        </div>
        <div className='contentWrapper'>
          <div className='createCollectionTitle'>Create Collection</div>
          <div className='smallText'>Required field</div>
          <div className='smallBold'>Logo Image</div>
          <div className='smallText'>This image will also be used for navigation. 350 x 350 recommended.</div>
          <div className='logoContainerImage'>
            <img className='logoImage'></img>
          </div>
          <div className='smallBold'>Banner Image</div>
          <div className='smallText'>
            This image will appear at the top of your collection page. Avoid
            <br/>including too much text in this banner image, as the dimensions
            <br/>change on different devices. 1400 x 350 recommended.
          </div>
          <div className='bannerContainerImage'>
            <img className='bannerImage'></img>
          </div>
          <div className='smallBold'>Name</div>
          <input className='nameInput' type='text' name='name' placeholder='Example-one punch man'/>
          <div className='smallBold'>Description</div>
          <div className='smallText'>Markdown syntax is supported. 0 of 1000 characters used.</div>
          <textarea className='descriptionInput'type='text' name='description' placeholder='description'/>
          <div className='smallBold'>Blockchain:Ethereum</div>
          <div className='smallBold'>Payment Token</div>
          <div className='smallText'>These tokens can be used to buy and sell your items.</div>
          <div className='tokenContainer'>
            <img className='tokenImage'></img>
          </div>
        </div>
        <button className='createButton'>Create</button>
      </div>
    </div>
  )
}

export default Collection