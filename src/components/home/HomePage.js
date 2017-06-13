import React, {PropTypes} from 'react';
import MostPopularBookList from './MostPopularBooksList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../../actions/bookAction';
import FlexboxLayout from './FlexboxLayout';


class HomePage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = { isOpen: false,  loading: false, hide: false };
    }
    componentDidMount() {
        this.props.actions.loadAllBooksBySoldQuantity();
    }
    render(){
        const {books, authors, categories} = this.props;


        return (
            <div>
                <MostPopularBookList books={books} authors={authors}
                                     categories={categories}/>
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
    books: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    carriers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getMostSoldBooks(books){
    return books.sort((a, b) => {
        return b.soldQuantity - a.soldQuantity;
    });
}

function mapStateToProps(state, ownProps) {
    return{
        books: state.books,
        authors: state.authors,
        categories: state.categories,
        covers: state.covers,
        carriers: state.carriers
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        actions: bindActionCreators(booksActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);
