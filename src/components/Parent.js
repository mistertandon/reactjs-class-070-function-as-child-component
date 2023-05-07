import React, { Component, Fragment } from 'react';
import BigBrother from './BigBrother';
import LittleBrother from './LittleBrother';
import LittleSister from './LittleSister';

class Parent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <BigBrother brother={
                (brother) => (
                    <Fragment>
                        <LittleBrother bgColor="#80BFFF" brother={brother} />
                        <LittleSister bgColor="#FF80FF" brother={brother} />
                    </Fragment>
                )
            } />
        )
    }
}

export default Parent;