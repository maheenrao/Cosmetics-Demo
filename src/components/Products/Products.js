import React, { Fragment } from 'react'
import ProductSummary from './ProductSummary'
import ProductAvailable from './ProductAvailable'

const Products = () => {
    return (
        <Fragment>
        <ProductSummary/>
        <ProductAvailable/>
        </Fragment>
    )
}

export default Products
