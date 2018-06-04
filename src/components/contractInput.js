import React, { Component } from 'react';

class ContractInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { n, c, d } = this.props;
        console.log(this.props)
        return (
            <div>
                Contracts
                <input type="text" onChange={(e) => this.props.updateContract(e, 1)} value={this.n} id="nameText" />
                <input type="text" onChange={(e) => this.props.updateContract(e, 2)} value={this.c} id="companyText" />
                <input type="text" onChange={(e) => this.props.updateContract(e, 3)} value={this.d} id="detailText" />
                <button onClick={this.props.submitContract}> SUBMIT </button>
            </div>
        );
    }
}

export default ContractInput;