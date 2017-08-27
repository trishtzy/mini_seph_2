var ProductGrid = React.createClass({
  handleClickBrand: function(product) {
    var brand_id = product.attributes.brand.id
    console.log('clicked: '+brand_id);
    var self = this;
    $.ajax({
      url: '/api/products/get_products_by_brand',
      data: {id: brand_id},
      success: function(response) {
        self.props.handleClickBrand(response.data);
      },
      error: function(xhr, status, error) {
        alert('API error: ', error);
      }
    });
  },
  handleClickParent: function(product) {
    var cat_id = product.attributes.category.id
    console.log('clicked: '+ cat_id);
    var self = this;
    $.ajax({
      url: '/api/products/get_products_by_cat',
      data: {id: cat_id},
      success: function(response) {
        self.props.handleClickParent(response.data);
      },
      error: function(xhr, status, error) {
        alert('API error: ', error);
      }
    });
  },
  render: function() {
    var products = [];
    this.props.products.forEach(function(product) {
      products.push(<Product product={product}
                          key={'product' + product.id}
                          handleClickBrand={this.handleClickBrand.bind(this, product)}
                          handleClickParent={this.handleClickParent.bind(this, product)}/>);
    }.bind(this));
    return(
      <div className="row">
        {products}
      </div>
    )
  }
});
