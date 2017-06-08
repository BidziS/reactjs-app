import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const MostPopularBookListRow = ({book, order}) => {


    return (
        <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
            <Link to="/about">
                <div className="item-homepage">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xs-3">
                            <img src={book.cover}
                                 alt="boohoo" className="img-homepage"/>
                        </div>
                        <div className="col-md-9 col-lg-9 col-xs-9 item-description">
                            <h4>{book.title}</h4>
                            <br/>
                            <h5>Autor: {book.author.name + ' ' + book.author.surname}</h5>
                            <br/>
                            <h5>ISBN: {book.isbn}</h5>
                            <br/>
                            <h5>Kategoria: {book.category.name}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

MostPopularBookListRow.propTypes = {
    book: PropTypes.object.isRequired,
    order: PropTypes.func.isRequired
};

export default MostPopularBookListRow;
