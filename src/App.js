import "./App.css";
import { Component } from "react";
import CardContainer from "./components/card-container/Card-Container";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app">
        <h1 className="title">Employees</h1>
        <SearchBox
          placeholder="search employee..."
          handleChange={this.handleChange}
        />
        <CardContainer users={filteredUsers} />
      </div>
    );
  }
}

export default App;
