import React from 'react';

const PullItem = (props) => {
    const { id, result, gacha } = props.data;
    const { rowStyle, tinyCellStyle, smallCellStyle, cellStyle, threeStar, fourStar, fiveStar } = styles;
    let rowResultStyle = {};
    if ( result === '3*' ) {
        rowResultStyle = { ...rowStyle, ...threeStar }
    } else if ( result === '4*' ) {
        rowResultStyle = { ...rowStyle, ...fourStar }
    } else {
        rowResultStyle = { ...rowStyle, ...fiveStar }
    }
    return (
        <li style={rowResultStyle}>
            <div style={tinyCellStyle}>
                {id}
            </div>
            <div style={smallCellStyle}>
                {result}
            </div>
            <div style={cellStyle}>
                {gacha}
            </div>
        </li>
    );
}

const styles = {
    rowStyle: {
        display: 'flex',
        borderBottom: '1px solid #313335'
    },
    tinyCellStyle: {
        width: '12%',
        padding: '2px 5px',
        borderRight: '1px solid #313335'
    },
    smallCellStyle: {
        width: '28%',
        padding: '2px 5px',
        borderRight: '1px solid #313335'
    },
    cellStyle: {
        width: '60%',
        padding: '2px 5px'
    },
    threeStar: {
        backgroundColor: '#efefef'
    },
    fourStar: {
        backgroundColor: 'gold'
    },
    fiveStar: {
        background: 'linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)'
    }
}

export default PullItem;
