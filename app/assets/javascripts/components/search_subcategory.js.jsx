var SearchSubCategory = React.createClass({
  selectSubCat: function() {
    var query_sub = ReactDOM.findDOMNode(this.refs.query_sub).value.toUpperCase();
    if (query_sub) {
      var self = this;
      $.ajax({
        url: '/api/products/search_by_subcategory',
        data: {query_sub: query_sub},
        success: function(response) {
          self.props.selectSubCat(response.data);
        },
        error: function(xhr, status, error) {
          self.props.selectSubCat([]);
          console.log('Type exact category name: ', status);
        }
      });
    } else {
      var self = this;
      $.ajax({
        url: '/api/products',
        success: function(response) {
          self.props.selectSubCat(response.data);
        },
        error: function(xhr, status, error) {
          console.log('API Error: ', status);
        }
      });
    }

  },
  render: function() {
    return(
      <input onChange={this.selectSubCat}
        type="text"
        className="form-control"
        placeholder="Search SubCategories"
        ref="query_sub" />
    )
  }
});
