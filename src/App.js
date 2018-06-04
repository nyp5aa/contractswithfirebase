import React, { Component } from 'react';
import './App.css';
import ContractInput from "./components/contractInput";
import ContractDisplay from "./components/contractdisplay";
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDwvjb3Ps20MkdUZTH6nYNIrJl6L8RmA-I",
  authDomain: "contractwithfirebase.firebaseapp.com",
  databaseURL: "https://contractwithfirebase.firebaseio.com",
  projectId: "contractwithfirebase",
  storageBucket: "",
  messagingSenderId: "820855672281"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      detail: "",
      allContracts: []
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
    firebase.database().ref('contracts').push(contract);
    this.setState({
      name: "",
      company: "",
      detail: "",
    });
    // I tried for a long time trying to pass functions and props down to set the input
    // text fields back to empty after submitting, but couldn't get it to work.
    document.getElementById("nameText").value = "";
    document.getElementById("companyText").value = "";
    document.getElementById("detailText").value = "";
  }

  componentDidMount() {
    firebase.database().ref('contracts').on('value', (snapshot) => {
      let updatedListOfContracts = [];
      for (let contract in snapshot.val()) {
        updatedListOfContracts.push({
          id: contract,
          name: snapshot.val()[contract].name,
          company: snapshot.val()[contract].company,
          detail: snapshot.val()[contract].detail
        });
      }
      this.setState({
        allContracts: updatedListOfContracts
      });
    })
  }

  removeContract=(id)=>{
    console.log("hello world");
    console.log(id);
    firebase.database().ref(`/contracts/${id}`).remove();
  }

  render() {
    let allContracts = this.state.allContracts.map((contract) => {
      return (<ContractDisplay
        name={contract.name}
        company={contract.company}
        detail={contract.detail}
        id={contract.id}
        removeContract={this.removeContract}
      />);
    });
    return (
      <div>
        <ContractInput
          updateContract={this.updateContract}
          submitContract={this.submitContract}
          n={this.state.name}
          c={this.state.company}
          d={this.state.detail}
        />
        {allContracts}
      </div>
    );
  }
}

export default App;