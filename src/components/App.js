import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, IndexLink,browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as languageActions from '../actions/languageActions';
import ChangeLanguage from './home/ChangeLanguage';
import Modal from './home/Modal';
import Loader from './home/Loader';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hide: false, isOpen: false};
    }
    render() {
        const toggleModal = () => {
            if(this.state.isOpen){
                this.setState({
                    hide: !this.state.hide
                });
                setTimeout(() => {
                    this.setState({
                        isOpen: !this.state.isOpen
                    });
                }, 400);
                return;
            }
            this.setState({
                hide: !this.state.hide
            });
            this.setState({
                isOpen: !this.state.isOpen
            });
        };
        return (
            <div className="page-wrap">
                <Header hide={this.state.hide}
                        isOpen={this.state.isOpen}
                        openLoginForm={toggleModal}/>
                <div className="container">
                    <ChangeLanguage/>
                    {this.props.children}
                </div>
                <Modal show={this.state.isOpen}
                       hide={this.state.hide}
                       onClose={toggleModal}>
                    Here's some content for the modal
                </Modal>
                <Loader loading={this.props.loading} />
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
    return{
        loading: state.ajaxcall > 0
    };
}

export default connect(mapStateToProps)(App);
