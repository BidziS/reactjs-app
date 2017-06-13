import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carriersActions from '../../../actions/carrierAction';
import CarrierList from './CarrierList';
import CategoryForm from '../category/CategoryForm';

class CarrierPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleCarrierDelete = this.handleCarrierDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdateField = this.handleUpdateField.bind(this);
        this.handleSaveCarrier = this.handleSaveCarrier.bind(this);
        this.handleEditCarrier = this.handleEditCarrier.bind(this);
        this.handleConfirmSave = this.handleConfirmSave.bind(this);

        this.state = {
            isOpen: false, hide: false,
            isConfirmModalOpen: false, hideConfirmDialog: false,
            carrier: Object.assign({}, this.props.carrier)
        };
    }

    handleCarrierDelete(event) {
        const field = parseInt(event.target.id);
        this.props.actions.deleteCarrier(field);
    }

    handleUpdateField(event) {
        const field = event.target.name;
        let carrier = this.state.carrier;
        carrier[field] = event.target.value;
        return this.setState({carrier: carrier});
    }

    handleConfirmSave(event) {
        event.preventDefault();
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        this.setState({
            isConfirmModalOpen: !this.state.isConfirmModalOpen
        });

    }

    handleSaveCarrier(event) {
        event.preventDefault();
        this.props.actions.saveCarrier(this.state.carrier);
        let carrier = {id: '', name: ''};
        this.setState({
            carrier: carrier
        });
        this.setState({
            hideConfirmDialog: !this.state.hideConfirmDialog
        });
        setTimeout(() => {
            this.setState({
                isConfirmModalOpen: !this.state.isConfirmModalOpen
            });

            this.setState({
                hide: !this.state.hide
            });
            setTimeout(() => {
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }, 300);

        }, 300);
    }

    handleEditCarrier(event) {
        const carrierId = parseInt(event.target.id);
        const carrier = this.props.carriers.filter(carrier => carrier.id === carrierId);
        this.setState({
            carrier: Object.assign({},carrier[0])
        });
        this.handleClose(event);
    }

    handleClose(event) {
        event.preventDefault();
        if (this.state.isOpen) {
            this.setState({
                hide: !this.state.hide
            });
            setTimeout(() => {
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }, 300);
            return;
        }
        this.setState({
            hide: !this.state.hide
        });
        this.setState({
            isOpen: !this.state.isOpen
        });

    }

    render() {
        return (
            <div>
                <CarrierList carriers={this.props.carriers} onDelete={this.handleCarrierDelete}
                             onModalOpen={this.handleClose} onEdit={this.handleEditCarrier}/>
                <CategoryForm hide={this.state.hide} isOpen={this.state.isOpen}
                              category={this.state.carrier} isConfirmModalOpen={this.state.isConfirmModalOpen}
                              isConfirmModalHide={this.state.hideConfirmDialog}
                              onClose={this.handleClose}
                              onUpdate={this.handleUpdateField} onSave={this.handleSaveCarrier}
                              onConfirmSave={this.handleConfirmSave}/>
            </div>
        );
    }
}

CarrierPage.propTypes = {
    carriers: PropTypes.array.isRequired,
    carrier: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function getCarrierById(carriers, id) {
    const carrier = carriers.filter(carrier => carrier.id == id);
    if (carrier.length) return carrier[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const carrierId = ownProps.params.id;

    let carrier = {id: '', name: ''};

    if (carrierId && state.carriers.length > 0) {
        carrier = getCarrierById(state.carriers, carrierId);
    }

    return {
        carriers: state.carriers,
        carrier: carrier
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(carriersActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CarrierPage);
