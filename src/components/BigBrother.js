import React, { Component } from 'react';

class BigBrother extends Component {

    constructor(props) {
        super(props);

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {
            toys: ['Cricket', 'Football'],
            currentToy: null
        }
    }

    currentToyDefValue = 'Nothing';

    handleMouseMove = (event) => {

        const mouseClientX = event.clientX;

        const currentToy = mouseClientX > 500 ? this.state.toys[0] : this.state.toys[1];

        this.setState(
            () => ({
                currentToy
            })
        )
    }

    handleMouseLeave = (event) => {

        this.setDefaultCurrentToyState();
    }

    setDefaultCurrentToyState = () => {

        this.setState(
            () => ({
                currentToy: this.currentToyDefValue
            })
        )
    }

    render() {

        const { currentToy } = this.state;
        const { brother } = this.props;

        return (
            <div onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}>
                {
                    currentToy && (
                        <div>Big brother want to play with {currentToy}</div>
                    )
                }
                {
                    brother(this.state)
                }
            </div>
        )
    }

    componentDidMount() {

        const { currentToy } = this.state;

        if (!currentToy) {
            this.setDefaultCurrentToyState();
        }

    }
}

export default BigBrother;