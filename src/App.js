import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      selectedTable: '',
      selectedColumns: [],
      tables: [],
      columns: [],
      tableData: [],
      auth: 'Basic ' + btoa(props.user + ':' + props.pass),
    };
    
    this.onTableChange = this.onTableChange.bind(this);
  
    //this.getColumnList = this.getColumnList.bind(this);

  }

  componentDidMount() {
    Object.assign(axios.defaults, {headers: {authorization: this.state.auth}});
    axios.get(`${this.props.baseUrl}`)
      .then(res => {
        const tables = res.data.value;
        this.setState({ tables });
        //this.setState({ selectedTable: tables[0].name});
      })
      .catch(function (error) {
        if (error.response) {
          alert('Code: ' + error.response.data.error.code + '\r\nMessage: ' + error.response.data.error.message);
        } else {
          console.log('Error', error.message);
        }
      });
    //this.getColumnList();
  }
  

  
  renderTableList() {
    let tablesHTML = [];
    for (let i = 0; i < this.state.tables.length; i++) {
      let table = this.state.tables[i];
      tablesHTML.push(<option key={table.url} value={table.name}>{table.name}</option>);
    }
    return tablesHTML;
  }
  
  
  onTableChange(event) {
    const selectedTable = event.target.value;
    this.setState({
      selectedTable,
      tableData: [],
    });
   // this.getColumnList(selectedTable);
  }
  
  

  render() {    
    return (
      <div>
        <h1 style={{fontSize: '1.2em', color: '#177CB8', marginBottom: '0'}}>React Demo</h1>
        <br/>
        <label>Select a Table</label>
        <br/>
        <select onChange={this.onTableChange}>
          { this.renderTableList() }
        </select>
       
      </div>
    );
  }
}

export default App;