var SearchBrand = React.createClass({
  selectBrand: function() {
    var query_brand = ReactDOM.findDOMNode(this.refs.query_brand).value;
    if (query_brand) {
      var self = this;
      $.ajax({
        url: '/api/products/search_by_brand',
        data: {query_brand: query_brand},
        success: function(response) {
          self.props.selectBrand(response.data);
        },
        error: function(xhr, status, error) {
          self.props.selectBrand([]);
          console.log('Type exact brand name: ', status);
        }
      });
    } else {
      var self = this;
      $.ajax({
        url: '/api/products',
        success: function(response) {
          self.props.selectBrand(response.data);
        },
        error: function(xhr, status, error) {
          console.log('API Error: ', status);
        }
      });
    }

  },
  render: function() {
    return(
      <input onChange={this.selectBrand}
        type="text"
        className="form-control"
        placeholder="Search Brands"
        ref="query_brand" />
    )
  }
});
