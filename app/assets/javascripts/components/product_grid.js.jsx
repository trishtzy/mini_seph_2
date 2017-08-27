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
  handleClickChild1: function(product) {
    var subcat_id = product.attributes.subcategory.id
    console.log('clicked: '+ subcat_id);
    var self = this;
    $.ajax({
      url: '/api/products/get_products_by_subcat',
      data: {id: subcat_id},
      success: function(response) {
        self.props.handleClickChild1(response.data);
      },
      error: function(xhr, status, error) {
        alert('API error: ', error);
      }
    });
  },
  handleClickChild2: function(product) {
    var subsubcat_id = product.attributes.subsubcategory.id
    console.log('clicked: '+ subsubcat_id);
    var self = this;
    $.ajax({
      url: '/api/products/get_products_by_subsubcat',
      data: {id: subsubcat_id},
      success: function(response) {
        self.props.handleClickChild2(response.data);
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
                          handleClickParent={this.handleClickParent.bind(this, product)}
                          handleClickChild1={this.handleClickChild1.bind(this, product)}
                          handleClickChild2={this.handleClickChild2.bind(this, product)}/>);
    }.bind(this));
    return(
      <div className="row">
        {products}
      </div>
    )
  }
});
