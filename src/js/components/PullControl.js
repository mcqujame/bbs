import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGachaPull } from '../actions/index';

const mapStateToProps = state => {
    const { currentGacha, pulls } = state;
    return {
        currentGacha,
        pulls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addGachaPull: pull => dispatch(addGachaPull(pull))
    };
};

class PullControl extends Component {
    constructor() {
        super();

        this.state = {
            pullCount: 1
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        let count = event.target.id.split('-')[1] || 1;
        let attribute = '';
        while (count > 0) {
            const pullResult = this.pullGacha();
            this.props.addGachaPull({
                result: pullResult,
                id: this.state.pullCount,
                gacha: this.props.currentGacha.title
            });
            this.state.pullCount++
            count--;
        }
    }

    pullGacha() {
        const num = Math.floor( Math.random() * 100 ) + 1;
        const rate = this.props.currentGacha.rate;
        if (num <= rate) {
            return this.getChar();
        } else if (num <= (rate+10)) {
            return '4*';
        } else {
            return '3*';
        }
    }

    getChar() {
        console.log( 'lkjh')
        const { characters } = this.props.currentGacha;
        return characters[Math.floor( Math.random() * characters.length )];
    }

    render() {
        const { barStyle, buttonContainer } = styles;
        return (
            <div style={barStyle}>
                <form onSubmit={this.handleSubmit} style={buttonContainer}>
                    <button id="pull" onClick={this.handleClick} type="submit" className="btn">
                        Pull
                    </button>
                    <button id="pull-10" onClick={this.handleClick} type="submit" className="btn">
                        Pull 10
                    </button>
                    <button id="pull-100" onClick={this.handleClick} type="submit" className="btn">
                        Pull 100
                    </button>
                </form>
            </div>
        );
    }
}

const styles = {
    barStyle: {
        backgroundColor: '#eaeaea',
        borderTop: '1px solid #dddddd',
        borderBottom: '1px solid #dddddd',
        margin: '5px 0'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 800,
        padding: '10px 20px',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PullControl);;
