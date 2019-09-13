import React from 'react'
import  './PreviewCollection.style.scss'
import CollectionItems from '../CollectionItems/CollectionItems'
const PreviewCollection = ({title,items}) => {



    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item,idx)=>idx<4).map(({id,...otherItemProps})=>(
                    <CollectionItems key={id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection
