import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGacha } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        setGacha: gacha => dispatch(setGacha(gacha))
    }
}

class GachaItem extends Component {
    constructor() {
        super();

        this.updateCurrent = this.updateCurrent.bind(this);
    }

    updateCurrent() {
        this.props.setGacha( this.props.data );
    }

    render() {
        const { characters, image, title } = this.props.data;
        const { containerStyle, imgStyle } = styles;
        return (
            <div onClick={this.updateCurrent} style={containerStyle}>
                <img style={imgStyle} src={image} />
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        width: '50%',
        cursor: 'pointer'
    },
    imgStyle: {
        maxWidth: '100%',
        minWidth: 200
    }
}

export default connect(null,mapDispatchToProps)(GachaItem);
