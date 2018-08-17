import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log( 'here' );
    const { pulls, characters } = state;
    return { pulls, characters };
}

class PullSummary extends Component {
    render() {
        const { containerStyle, heading, blueHeading, imgContainer, imageStyle, frameImageStyle, charImageStyle, backgroundStyle, attributeStyle } = styles;
        const { characters } = this.props;
        const count = this.props.pulls.length;
        let winnings = [];
        this.props.pulls.forEach( pull => {
            const name = pull.result;
            if ( name.indexOf('*') === -1 ) {
                winnings.push( pull );
            }
        });
        return (
            <div>
                <div style={ containerStyle }>
                    <div style={ heading }>
                        Pull Count
                        <span style={ blueHeading }>{ count }</span>
                    </div>
                    <div style={ heading }>
                        Orbs Spent
                        <span style={ blueHeading }>{ count * 25 }</span>
                    </div>
                </div>
                <div style={imgContainer}>
                    {winnings.map(el => (
                        <div style={ imageStyle }>
                            <img style={ attributeStyle } src={`src/static/common/attribute-${characters[el.result.replace(/ /g, '-')]
}.png`} />
                            <img style={ frameImageStyle } src='src/static/common/character-window.png' />
                            <img style={ charImageStyle } src={`src/static/characters/${el.result.replace(/\s/g, '-').toLowerCase()}.png`} />
                            <img style={ backgroundStyle } src='src/static/common/character-background.png' />
                        </div>
                    ), this )}
                </div>
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    heading: {
        fontSize: 24
    },
    blueHeading: {
        color: '#0067AC',
        marginLeft: 10
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        margin: 20
    },
    imageStyle: {
        height: 100,
        margin: 5,
        position: 'relative',
        width: 100
    },
    frameImageStyle: {
        maxHeight: 100,
        zIndex: 3,
        position: 'absolute',
        top: 0,
        left: 0
    },
    charImageStyle: {
        maxHeight: 100,
        zIndex: 2,
        position: 'absolute',
        top: 0,
        left: 0
    },
    backgroundStyle: {
        maxHeight: 100,
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0
    },
    attributeStyle: {
        maxHeight: 30,
        zIndex: 4,
        position: 'absolute',
        bottom: 3,
        left: 2
    }
}

export default connect(mapStateToProps)(PullSummary);
