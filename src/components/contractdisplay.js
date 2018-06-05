import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './contractdisplay.css';
import Close from './closePic.png';

class ContractDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, company, detail, id } = this.props;
        return (
            < Card className="single-contract" raised="true" classes="div">
                <div className="background-color">
                    <div className="name">
                        {name}
                    </div>
                    <div className="title">
                        Company:
                        <span className="responses" id="company">
                            {company} 
                        </span>
                    </div>
                    <div className="title">
                        Details:
                        <span className="responses" id="detail">
                            {detail}
                        </span>
                    </div>
                    <div className="remove">
                        <img src={Close} onClick={() => this.props.removeContract(id)}/>
                    </div>
                </div>
            </Card >
        );
    }
}
    
export default ContractDisplay;