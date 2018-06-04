import React, { Component } from 'react';
import './App.css';
import ContractInput from "./components/contractInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      detail: ""
    }
  }
  updateContract = (e, num) => {
    if (num == 1) {
      this.setState({
        name: e.target.value
      })
    }
    else if (num == 2) {
      this.setState({
        company: e.target.value
      });
    }
    else {
      this.setState({
        detail: e.target.value
      });
    }
  }
  submitContract = () => {
    let contract = {
      name: this.state.name,
      company: this.state.company,
      detail: this.state.detail
    }
    this.setState({
      name: "",
      company: "",
      detail: "",
    });
    document.getElementById("nameText").value = "";
    document.getElementById("companyText").value = "";
    document.getElementById("detailText").value = "";
  }
  render() {
    return (
      <div>
        <ContractInput
          updateContract={this.updateContract}
          submitContract={this.submitContract}
          n={this.state.name}
          c={this.state.company}
          d={this.state.detail}
        />
      </div>
    );
  }
}

export default App;