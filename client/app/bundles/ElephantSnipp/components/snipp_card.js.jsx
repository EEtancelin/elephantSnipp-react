//
class SnippCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.snipp.extract.title};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  delete(event){
    console.log(this.props.snipp.extract.id)
    var that = this
    $.ajax({
      type: 'DELETE',
      format: 'json',
      url: Routes.snipp_path(this.props.snipp.extract.id),
      data: {snipp : { id:this.props.snipp.extract.id}} ,
      success: function(data) {
        that.setState({ product: data });
      }
    });
  };

  render() {
    return(
      <div className="snipp-card">
        <div>
        {this.props.snipp.extract.title}
        <div className="snipp-controls"><i className="fa fa-trash-o" aria-hidden="true" onClick={this.delete}></i></div>
      </div>
        <MarkList marks={ExtractMarks(this.state.value)} />
      </div>
    );
  }
}

function MarkList(props) {
  const marks = props.marks;
  const listItems = props.marks.map((mark) =>
    <Mark key={mark.toString()} title={mark} />
  );
  return (
    <div className="mark-list">{listItems}</div>
  );
}

class Mark extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (<div className="mark">{this.props.title}</div>);
  }
}

function ExtractMarks(string) {
  // Return an array of all the words starting with # in string.
  var re = /(?:^|\W)#(\w+)(?!\w)/g,
  match,
  matches = [];

  while (match = re.exec(string)) {
    matches.push(match[1]);
  }
  return [...new Set(matches)] // Sort uniq value
  }
