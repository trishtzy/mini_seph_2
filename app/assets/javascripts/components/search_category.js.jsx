var SearchCategory = React.createClass({
  selectCat: function() {
    var query_cat = ReactDOM.findDOMNode(this.refs.query_cat).value.toUpperCase();
    if (query_cat) {
      var self = this;
      $.ajax({
        url: '/api/products/select_category',
        data: {query_cat: query_cat},
        success: function(response) {
          self.props.selectCat(response.data);
        },
        error: function(xhr, status, error) {
          self.props.selectCat([]);
          console.log('Type exact category name: ', status);
        }
      });
    } else {
      var self = this;
      $.ajax({
        url: '/api/products',
        success: function(response) {
          self.props.selectCat(response.data);
        },
        error: function(xhr, status, error) {
          console.log('API Error: ', status);
        }
      });
    }

  },
  render: function() {
    return(
      <input onChange={this.selectCat}
        type="text"
        className="form-control"
        placeholder="Search Categories"
        ref="query_cat" />
    )
  }
});
