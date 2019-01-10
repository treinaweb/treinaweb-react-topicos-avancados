import React, { Component } from 'react';

import { Channel } from '../services/EventService';

class ProductList extends Component{
    static defaultProps = {
        products: []
    }

    remove(product){
        Channel.emit('product:remove', product.id);
    }

    render(){
        const { props } = this;
        return (
            <ul className="product-list">
                {
                    props.products.map(product => (
                        <li key={product.id} className="product-list-item" >
                            <button onClick={this.remove.bind(this, product)} >X</button>
                            <img src={product.image} alt={ product.description } />
                            <div>{ product.description }</div>
                            <div>{ product.price }</div>
                        </li>
                    ))   
                }
                
            </ul>
        )
    }
}

export default ProductList;