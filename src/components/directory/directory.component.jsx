import React, { Component } from 'react'
import './directory.style.scss'
import MenuItem from '../../pages/menu-item/menu-item'
export default class Directory extends Component {

    constructor(){
        super();
        this.state={

            sections: [{
                id:1,
                title:'HATS',
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                linkUrl:'hats'
            },{
                id:2,
                title:'JACKETS',
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                linkUrl:'jackets'
            },{
                id:3,
                title:'SNEAKERS',
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                linkUrl:'hats'
            },{
                id:4,
                size:"large",
                title:'womens',
                imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                linkUrl:'hats'
            },{
                id:5,
                title:'mens',
                imageUrl:'https://i.ibb.co/R70vBrQ/womens.png',
                size:"large",
                linkUrl:'hats'
            }]

        }

    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps})=>(

                        <MenuItem key={id} {...otherSectionProps} />
                    ) )
                }
            </div>
        )
    }
}
