import React, {PropTypes} from 'react';

class NewestProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleOpenDropDown = this.handleOpenDropDown.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleOpenDropDown(event){
        event.preventDefault();
        this.setState({
           isOpen: true
        });
    }
    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                isOpen: false
            });
        }
    }
    render() {
        return (
            <div className="dropdown padding-nav" ref={this.setWrapperRef}>
                <a onClick={this.handleOpenDropDown}>Newest</a>
                <div className={this.state.isOpen ? "dropdown-content hover flex-container":"dropdown-content flex-container"}>
                    {this.props.books.map(book =>
                        <div key={book.id} className="list-item-container col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            {/*<Link to="/about">*/}
                            <div className="list-item">
                                <div className="row">
                                    <div className="col-md-2 col-lg-2 col-xs-2">
                                        <img src={book.cover}
                                             alt="boohoo" className="img-item-list"/>
                                    </div>
                                    <div className="col-md-10 col-lg-10 col-xs-10 item-description">
                                        <div className="item-list-title">{book.title}</div>
                                    </div>
                                </div>
                            </div>
                            {/*</Link>*/}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

NewestProducts.propTypes = {
    books: PropTypes.array.isRequired
};

export default NewestProducts;
