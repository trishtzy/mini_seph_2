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
    var name = product.attributes.name;
    var brand = product.attributes.brand.name;
    var desc = product.attributes.description;
    var price = product.attributes.price;
    var parent = product.attributes.category.name;
    var child_1 = product.attributes.subcategory.name;
    return (
      <div className="col-md-4">
        <h2>{name}</h2>
        <p>{brand}</p>
        <p>{desc}</p>
        <p>SGD ${price}</p>
        <i className="small-text"><a href="#">{parent}</a> > <a href="#">{child_1}</a></i>
      </div>
    )
  }
});
