import React, {Component} from 'react';
import './product-condensed.css';
import { deepStrictEqual } from 'assert';
import DataService from "../services/data-service";

let ds = new DataService();

class ProductCondensed extends Component {
    constructor(props) {
        super(props);

        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeItem(this.props.product);
    }

    render() {
        return (
            <li className="list-group-item">
                <p className="content">{this.props.product.title} | ${this.props.product.price}</p>             
                <a className="content" href="#" className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
            </li>
        );
    }
}

export default ProductCondensed;