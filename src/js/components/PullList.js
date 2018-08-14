import React from 'react';
import PullItem from './PullItem';

const List = (props) => {
    const { listStyle, rowStyle, tinyCellStyle, smallCellStyle, cellStyle } = styles;
    return (
        <ul style={listStyle}>
            <li style={rowStyle}>
                <div style={tinyCellStyle}>
                    <b>Pull #</b>
                </div>
                <div style={smallCellStyle}>
                    <b>Result</b>
                </div>
                <div style={cellStyle}>
                    <b>Gacha</b>
                </div>
            </li>
            {props.data.map(el => (
                <PullItem
                    key={el.id}
                    data={el}
                />
            ))}
        </ul>
    );
};

const styles = {
    listStyle: {
        flex: 1,
        margin: 20,
        border: '1px solid #313335'
    },
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
    }
}

export default List;
