import React from 'react';
import GachaItem from './GachaItem';

const List = (props) => {
    return (
        <ul style={styles.listStyle}>
            {props.data.map(el => (
                <GachaItem
                    key={el.id}
                    data={el}
                />
            ))}
        </ul>
    );
};

const styles = {
    listStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 2,
        justifyContent: 'space-between',
        margin: 20
    }
}

export default List;
