import React, { Component } from 'react';
import { connect } from 'react-redux';
import GachaList from './GachaList';
import PullList from './PullList';
import { addGacha, setGacha } from '../actions/index';
import { gachaList } from '../constants/gachas';

const mapStateToProps = state => {
    return { state };
};

const mapDispatchToProps = dispatch => {
    return {
        setGacha: gacha => dispatch(setGacha(gacha)),
        addGacha: gacha => dispatch(addGacha(gacha))
    };
};

class Results extends Component {

    componentWillMount() {
        gachaList.forEach( gacha => {
            this.props.addGacha(gacha);
        });
        this.props.setGacha(gachaList[0]);
    }

    render() {
        const { pulls, gachas } = this.props.state;
        return (
            <div className="flex-desktop" >
                <GachaList
                    data={gachas}
                />
                <PullList
                    data={pulls}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Results);;
