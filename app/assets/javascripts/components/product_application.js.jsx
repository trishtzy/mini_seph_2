var ProductApplication = React.createClass({
  getInitialState: function() {
    return { products: [] };
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
        alert('API error: ', error);
      }
    });
  },
  handleSearch: function(products) {
    this.setState({products: products});
  },
  render: function() {
    return(
      <div className="container">
        <div className="intro">
          <h1>Mini_Seph</h1>
          <p>by Tricia Tan</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductGrid products={this.state.products} />
          </div>
        </div>
      </div>
    )
  }
});
