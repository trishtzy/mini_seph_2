var SearchForm = React.createClass({
  handleSearch: function() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var self = this;
    $.ajax({
      url: '/api/products/search',
      data: {query: query},
      success: function(response) {
        self.props.handleSearch(response.data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', error);
      }
    });
  },
  render: function() {
    return(
      <input onChange={this.handleSearch}
        type="text"
        className="form-control"
        placeholder="Search product name or description"
        ref="query" />
    )
  }
});
