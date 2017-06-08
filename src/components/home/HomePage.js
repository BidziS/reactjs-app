import React, {PropTypes} from 'react';
import MostPopularBookList from './MostPopularBooksList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../../actions/bookAction';
import Modal from './Modal';

import FlexboxLayout from './FlexboxLayout';
import Loader from './Loader';




class HomePage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = { isOpen: false,  loading: false, hide: false };
    }

    render(){
        const {books} = this.props;

        const second = "col-md-5 col-lg-5 col-xs-12";
        const first = "col-md-5 col-lg-5 col-xs-12 col-md-offset-1 col-lg-offset-1";
        const firstOrSecond = (book) => {
            if(!(book.id % 2)){
                return second;
            }else {
                return first;
            }
        };
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
        const isLoading = () => {
            this.setState({
                loading: !this.state.loading
            });
        };
        return (
            <div>
                <MostPopularBookList books={books} order={firstOrSecond}/>
                <FlexboxLayout />
                {/*<Modal show={this.state.isOpen}*/}
                       {/*hide={this.state.hide}*/}
                       {/*onClose={toggleModal}>*/}
                    {/*Here's some content for the modal*/}
                {/*</Modal>*/}
                {/*<button onClick={toggleModal}>*/}
                    {/*Open the modal*/}

                {/*</button>*/}
                {/*<Loader loading={this.state.loading} isLoading={isLoading} />*/}
                {/*<button onClick={isLoading}>nie ładuj</button>*/}


            </div>
        );
    }

}

HomePage.propTypes = {
    books: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        books: state.books
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: bindActionCreators(booksActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);
