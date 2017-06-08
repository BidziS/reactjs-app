import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoriesActions from '../../actions/categoryAction';

class ManagePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div></div>
        );
    }
}

ManagePage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(ManagePage);
