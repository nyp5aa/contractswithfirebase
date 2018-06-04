import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './contractdisplay.css';
import Close from './closePic.png';

class ContractDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, company, detail } = this.props;
        return (
            <div>
                < Card className="single-contract">
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
                        <img src={Close} />
                    </div>
                </Card >
            </div>
        );
    }
}
    
export default ContractDisplay;