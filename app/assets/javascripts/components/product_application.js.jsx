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
  handleSearch: function(products) {
    this.setState({products: products});
  },
  selectBrand: function(products) {
    this.setState({products: products});
  },
  selectCat: function(products) {
    this.setState({products: products});
  },
  selectSubCat: function(products) {
    this.setState({products: products});
  },
  handleClickBrand: function(products) {
    console.log('clicking from app');
    this.setState({products: products});
  },
  handleClickParent: function(products) {
    console.log('cat clicking from app');
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
          <div className="col-md-2">
            <SearchBrand selectBrand={this.selectBrand} />
          </div>
          <div className="col-md-2">
            <SearchCategory selectCat={this.selectCat} />
          </div>
          <div className="col-md-2">
            <SearchSubCategory selectSubCat={this.selectSubCat} />
          </div>
          <div className="col-md-2">
            <SearchSubCategory selectSubCat={this.selectSubCat} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductGrid products={this.state.products}
                         handleClickBrand={this.handleClickBrand}
                         handleClickParent={this.handleClickParent}/>
          </div>
        </div>
      </div>
    )
  }
});
