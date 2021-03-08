import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hbutton from '../Button/Hbutton';
import Vbutton from '../Button/Vbutton';
import Sbutton from '../Button/Sbutton';

class Key extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>
                    <div>
                        <Sbutton button={"C"} id={"clear"} type={'clear'} />
                        <Sbutton button={"/"} id={"divide"} type={'operator'} display={this.props.display} />
                        <Sbutton button={"*"} id={"multiply"} type={'operator'} display={this.props.display} /> 
                    </div>
                    <div>
                        <Sbutton button={"7"} id={"seven"} value={'7'} type={'num'} />
                        <Sbutton button={"8"} id={"eight"} value={'8'} type={'num'} />
                        <Sbutton button={"9"} id={"nine"} value={'9'} type={'num'} />
                    </div>
                    <div>
                        <Sbutton button={"4"} id={"four"} value={'4'} type={'num'} />
                        <Sbutton button={"5"} id={"five"} value={'5'} type={'num'} />
                        <Sbutton button={"6"} id={"six"} value={'6'} type={'num'} />
                    </div>
                    <div>
                        <Sbutton button={"1"} id={"one"} value={'1'} type={'num'} />
                        <Sbutton button={"2"} id={"two"} value={'2'} type={'num'} />
                        <Sbutton button={"3"} id={"three"} value={'3'} type={'num'} />
                    </div>
                </div>
                <div>
                    <Hbutton button={"0"} id={"zero"} value={'0'} type={'num'} />
                    <Sbutton button={"."} id={"decimal"} value={'.'} display={this.props.display} /> 
                </div>
                <div>
                <Sbutton button={"-"} id={"subtract"} type={'operator'} display={this.props.display} />
                <Vbutton button={"+"} id={"add"} type={'operator'} display={this.props.display} /> 
                <Vbutton button={"="} id={"equals"} type={'operator'} display={this.props.display} />  
                </div>
            </div>
        );
    }
}

export default Key;