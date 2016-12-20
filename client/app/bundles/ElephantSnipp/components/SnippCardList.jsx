
class SnippCardList extends React.Component {

  constructor(props){
    super(props);
    this.state = {value: '', snipps: this.props.snipps};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()

    var id = this.state.snipps.length + 1 ;
    var title = this.state.value;
    var snippList = this.state.snipps;
    snippList.push(snippToJson(id, title));

    var that = this
    $.ajax({
      type: 'POST',
      format: 'json',
      url: Routes.snipps_path(this.key),
      data: {snipp : { title: this.state.value}} ,
      success: function(data) {
        that.setState({ product: data });
        that.setState({snipps: snippList});
      }
    });
  }


  render() {
    return (
      <div className= "snipp-list">

        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="snipp-list">
          {this.state.snipps.map(function(snipp) {
            return <SnippCardItem snipp={snipp} key={snipp.extract.id} />;
          })}
        </div>
      </div>
  );
  }
}

function snippToJson (id,title ){
   return ({extract: {id: id, title: title}})
}
