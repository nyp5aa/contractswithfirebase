import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './contractinput.css';

class ContractInput extends Component {
    constructor(props) {
        super(props);
    }

    handleKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.props.submitContract();
        }
    }
//this.props.updateContract
    render() {
        const { n, c, d } = this.props;
        return (
            <div className="input-page">
                Edit Contracts
                <div className="entries">
                    <TextField label="Name" onKeyPress={this.handleKeyPress} onChange={(e) => this.props.updateContract(e, 1)} value={n} id="nameText" />
                </div>
                <div className="entries">
                    <TextField label="Company" onKeyPress={this.handleKeyPress} onChange={(e) => this.props.updateContract(e, 2)} value={c} id="companyText" />
                </div>
                <div className="entries">
                    <TextField label="Details" onKeyPress={this.handleKeyPress} onChange={(e) => this.props.updateContract(e, 3)} value={d} id="detailText" />
                </div>
                <div className="entries">
                    <Button color="default" variant= "outlined" onClick={this.props.submitContract}> ADD </Button>
                    <Button color="secondary" variant= "outlined" onClick={this.props.deleteAllContracts}> DELETE ALL </Button>
                </div>
            </div>
        );
    }
}

export default ContractInput;