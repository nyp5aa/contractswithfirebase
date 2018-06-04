import React, { Component } from 'react';
import './App.css';
import ContractInput from "./components/contractInput";
import ContractDisplay from "./components/contractdisplay";
import firebase from 'firebase';


// Firebase setup and initailization
const config = {
  apiKey: "AIzaSyAPVXDpVBMJhgpmbd0pkCS792rKMkgmBFo",
  authDomain: "contractswithfirebase.firebaseapp.com",
  databaseURL: "https://contractswithfirebase.firebaseio.com",
  projectId: "contractswithfirebase",
  storageBucket: "",
  messagingSenderId: "364799498818"
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

  // This updates the inputed symbols real time
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

  // Called everytime the submit button is pressed. A contract item is created and stored in
  // firebase. Then the realtime storage of typed symbols are set to empty strings.
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

  // Everytime this component mounts, this function updates the list of contracts by pulling from firebase
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

  // This function is called anytime the trashcan symbol is pressed. This removes the contract
  // from firebase thus triggering the update on the actual page.
  removeContract = (id) => {
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
    console.log(allContracts);
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