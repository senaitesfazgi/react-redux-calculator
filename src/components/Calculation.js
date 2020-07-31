import React from 'react';
import {removeCalculation} from '../actions/calculations';
import {connect} from 'react-redux';

class Calculation extends React.Component
{
    deleteCalculation = () =>
    {
        const id = this.props.uniqueId;
        console.log(id);
        this.props.dispatch(removeCalculation(id))
    }

    render()
    {
        return(
            <li>
                <input type ="checkbox" onClick={this.deleteCalculation}/>
                {this.props.text}
            </li>

        );
    }
}

export default connect(
    null
)(Calculation);