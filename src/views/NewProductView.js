import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { ProductService } from '../services/ProductService';

class NewProductView extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: '',
            description: '',
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { target } = event,
            {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const newProduct = this.state;
        if(newProduct.description && newProduct.price){
            ProductService.create(newProduct);
            this.setState({
                image: '',
                description: '',
                price: 0
            });
        }
    }

    render(){
        const { state } = this;
        return (
            <div>
                <h1>
                    <FormattedMessage defaultMessage="New Product" id="product.new.title" />
                </h1>
                <form className="product-form" onSubmit={this.handleSubmit} >
                    <label>
                        <FormattedMessage defaultMessage="Image" id="product.new.image" />
                        <input name="image" onChange={this.handleChange} type="text" value={state.image} />
                    </label>
                    <label>
                        <FormattedMessage defaultMessage="Description" id="product.new.description" />
                        <input name="description" onChange={this.handleChange} type="text" value={state.description} />
                    </label>
                    <label>
                        <FormattedMessage defaultMessage="Price" id="product.new.price" />
                        <input name="price" onChange={this.handleChange} type="text" value={state.price} />
                    </label>
                    <button type="submit" >
                        <FormattedMessage defaultMessage="Create Product" id="product.new.create" />
                    </button>
                </form>
            </div>
        )
    }
}

export default NewProductView;