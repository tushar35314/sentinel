import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TxnHistory from '../containers/txnHistory'
import Swixer from './Swixer';

class LayoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let component = this.props.currentTab;
        switch (component) {
            case 'history':
                {
                    return <TxnHistory/>;
                }
            case 'vpnList':
                {
                    return <div>VPN List</div>
                }
            case 'receive':
                {
                    return <div>Receive</div>
                }
            case 'vpnHistory':
                {
                    return <div>VPN History</div>
                }
            case 'swixer':
                {
                    return <Swixer />
                }
            default:
                {
                    return <div>Send</div>
                }
        }
    }
}

function mapStateToProps(state) {
    return {
        currentTab: state.setCurrentTab
    }
}

function mapDispatchToActions(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToActions)(LayoutComponent);