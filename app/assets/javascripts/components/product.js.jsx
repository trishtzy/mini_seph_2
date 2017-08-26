var Product = React.createClass({
  propTypes: {
    name:           React.PropTypes.string,
    description:    React.PropTypes.string,
    price:          React.PropTypes.number,
    brand_id:       React.PropTypes.number,
    category_id:    React.PropTypes.number,
    subcategory_id: React.PropTypes.number,
  },
  render: function() {
    var product = this.props.product;
    return (
      <div className="col-md-4">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>SGD {product.price}</p>
        <i className="small-text">{product.brand_id},
                                  {product.category_id},
                                  {product.subcategory_id}</i>
      </div>
    )
  }
});
