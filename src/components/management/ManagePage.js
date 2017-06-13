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
            <div>
                <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                    <div className="item-homepage">
                        <div className="row">
                            Kategorie
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                    <div className="item-homepage">
                        <div className="row">
                            Nośniki
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                    <div className="item-homepage">
                        <div className="row">
                            Kategorie
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                    <div className="item-homepage">
                        <div className="row">
                            Kategorie
                        </div>
                    </div>
                </div>
            </div>

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
