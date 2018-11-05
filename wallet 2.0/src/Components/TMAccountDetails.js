import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { setTMComponent } from '../Actions/tendermint.action';
import { Button } from '@material-ui/core';
import { createAccountStyle } from '../Assets/createtm.styles';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

const Customstyles = theme => ({
    button: {
        
    }
});

class TMAccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    gotoDashboard = () => {
        this.props.setTMComponent('dashboard');
    }

    render() {
        const { classes, account } = this.props;
        return (
            <div style={{padding:'5%'}}>
            {/* <h2><center>WELCOME TO TENDERMINT</center></h2> */}
                <p style={createAccountStyle.detailsHeading}>Address&nbsp;:</p>
                <p style={createAccountStyle.detailsText}>{account.address}</p>
                <p style={createAccountStyle.detailsHeading}>Public Key&nbsp;:</p>
                <p style={createAccountStyle.detailsText}>{account.pub_key}</p>
                <p style={createAccountStyle.detailsHeading}>Seed&nbsp;:</p>
                <p style={createAccountStyle.detailsText}>{account.seed}</p>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => { this.gotoDashboard() }}
                    className={classes.button} style={{ outline: 'none' }}>
                    Go To Sentinel Tendermint Wallet
                </Button>
            </div>
        )
    }
}

TMAccountDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    return {
        lang: state.setLanguage,
        isTest: state.setTestNet,
        account: state.createTMAccount
    }
}

function mapDispatchToActions(dispatch) {
    return bindActionCreators({
        setTMComponent
    }, dispatch)
}

export default compose(withStyles(Customstyles), connect(mapStateToProps, mapDispatchToActions))(TMAccountDetails);