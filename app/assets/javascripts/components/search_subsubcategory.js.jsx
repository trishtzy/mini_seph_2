var SearchSubSubCategory = React.createClass({
  selectSubSubCat: function() {
    var query_sub = ReactDOM.findDOMNode(this.refs.query_sub).value;
    if (query_sub) {
      var self = this;
      $.ajax({
        url: '/api/products/select_subsubcategory',
        data: {query_sub: query_sub},
        success: function(response) {
          self.props.selectSubSubCat(response.data);
        },
        error: function(xhr, status, error) {
          self.props.selectSubSubCat([]);
          console.log('Type exact category name, case sensitive: ', status);
        }
      });
    } else {
      var self = this;
      $.ajax({
        url: '/api/products',
        success: function(response) {
          self.props.selectSubSubCat(response.data);
        },
        error: function(xhr, status, error) {
          console.log('API Error: ', status);
        }
      });
    }

  },
  render: function() {
    return(
      <input onChange={this.selectSubSubCat}
        type="text"
        className="form-control"
        placeholder="Search Subsubcategories"
        ref="query_sub" />
    )
  }
});
