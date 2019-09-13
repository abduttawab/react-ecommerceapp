import React, { Component } from 'react'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'
import SHOP_DATA from './shop.data'
export default class ShopPage extends Component {


    constructor(props){

        super(props);

        this.state = {

            collection : SHOP_DATA

        }
    }


    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collection.map(({id, ...otherCollectionProps}) => (

                        <PreviewCollection key ={id} {...otherCollectionProps}  />
        ))
                }
               
            </div>
        )
    }
}
