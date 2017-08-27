var Product = React.createClass({
  render: function() {
    var product = this.props.product;
    var name = product.attributes.name;
    var brand = product.attributes.brand.name;
    var brand_id = product.attributes.brand.id;
    var desc = product.attributes.description;
    var price = product.attributes.price;
    var parent = product.attributes.category.name;
    var parent_id = product.attributes.category.id;
    var child_1 = product.attributes.subcategory.name;
    var child_1_id = product.attributes.subcategory.id;
    return (
      <div className="col-md-4">
        <h3>{name}</h3>
        <p>by <a href="#" onClick={this.props.handleClickBrand}>{brand}</a></p>
        <p>{desc}</p>
        <p>SGD ${price}</p>
        <i className="small-text"><a href="#" onClick={this.props.handleClickParent}>{parent}</a> > <a href="#" onClick={this.props.handleClickChild}>{child_1}</a></i>
      </div>
    )
  }
});
