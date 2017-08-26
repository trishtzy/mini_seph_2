var ProductGrid = React.createClass({
  render: function() {
    var products = [];
    this.props.products.forEach(function(product) {
      products.push(<Product product={product}
                          key={'product' + product.id} />);
    }.bind(this));
    return(
      <div className="row">
        {products}
      </div>
    )
  }
});
