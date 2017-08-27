var ProductApplication = React.createClass({
  getInitialState: function() {
    return {
      products: []
    };
  },
  componentDidMount: function() {
    this.getProductData();
  },
  getProductData: function() {
    var self = this;
    $.ajax({
      url: '/api/products',
      success: function(response) {
        self.setState({ products: response.data });
      },
      error: function(xhr, status, error) {
        alert('1. API error: ', error);
      }
    });
  },
  reloadProducts: function(products) {
    this.setState({products: products});
  },
  render: function() {
    return(
      <div className="container">
        <div className="intro">
          <h1><a href="/">Mini_Seph</a></h1>
          <p>by Tricia Tan</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.reloadProducts}/>
          </div>
          <div className="col-md-2">
            <SearchBrand selectBrand={this.reloadProducts} />
          </div>
          <div className="col-md-2">
            <SearchCategory selectCat={this.reloadProducts} />
          </div>
          <div className="col-md-2">
            <SearchSubCategory selectSubCat={this.reloadProducts} />
          </div>
          <div className="col-md-2">
            <SearchSubCategory selectSubCat={this.reloadProducts} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductGrid products={this.state.products}
                         handleClickBrand={this.reloadProducts}
                         handleClickParent={this.reloadProducts}
                         handleClickChild1={this.reloadProducts}/>
          </div>
        </div>
      </div>
    )
  }
});
