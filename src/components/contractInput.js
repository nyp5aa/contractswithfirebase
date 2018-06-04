import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './contractinput.css';

class ContractInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { n, c, d } = this.props;
        return (
            <div className="input-page">
                Add Contract
                <div className="entries">
                    <TextField label="Name" onChange={(e) => this.props.updateContract(e, 1)} value={this.n} id="nameText" />
                </div>
                <div className="entries">
                    <TextField label="Company" onChange={(e) => this.props.updateContract(e, 2)} value={this.c} id="companyText" />
                </div>
                <div className="entries">
                    <TextField label="Details" onChange={(e) => this.props.updateContract(e, 3)} value={this.d} id="detailText" />
                </div>
                <div className="entries">
                    <Button color="primary" variant= "contained" onClick={this.props.submitContract}> SUBMIT </Button>
                </div>
            </div>
        );
    }
}

export default ContractInput;