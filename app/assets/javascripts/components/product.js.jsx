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
        <h2>{product.attributes.name}</h2>
        <p>{product.attributes.brand.name}</p>
        <p>{product.attributes.description}</p>
        <p>SGD ${product.attributes.price}</p>
        <i className="small-text">{product.attributes.category.name} > {product.attributes.subcategory.name}</i>
      </div>
    )
  }
});
