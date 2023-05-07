import React, { Component } from 'react';

class LittleSister extends Component {

    render() {

        const { brother, bgColor } = this.props;

        return (
            <div style={{ backgroundColor: bgColor }}>
                {
                    brother.currentToy &&
                    (
                        <p>
                            Little brother want to play with {brother.currentToy}
                        </p>
                    )
                }
            </div>
        )
    }
}

export default LittleSister;