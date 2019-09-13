import React from 'react'
import './CollectionItems.style.scss'

const CollectionItems = ({id,name,price,imageUrl}) => {
    return (
        <div key={id} className='collection-item'>
        <div className='image' style={{ backgroundImage:`url(${imageUrl})`}}> </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
       

        </div>
    )
}

export default CollectionItems
