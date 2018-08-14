import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const { currentGacha } = state;
    return { currentGacha };
}

const CurrentGacha = (props) => {
    console.log( 'current', props );
    return (
        <div style={styles.containerStyle}>
            <img style={styles.imgStyle} src={props.currentGacha.image} />
        </div>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#222222',
        display: 'flex',
        justifyContent: 'center',
        padding: 20
    },
    imgStyle: {
        height: 250,
        maxWidth: '80%'
    }
}

export default connect(mapStateToProps)(CurrentGacha);
