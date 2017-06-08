import React, {PropTypes} from 'react';
import MostPopularBookListRow from './MostPopularBooksListRow';

const MostPopularBookList = ({books, order}) => {
    return (

            <div id="homepage">
                <div className="homepage-container">
                    <h4>Najczęściej kupowane książki</h4>
                    <hr />
                </div>
                <div className="flex-container">
                    {books.map(book =>
                        <MostPopularBookListRow key={book.id} book={book} order={order}/>
                    )}
                </div>
            </div>
    );
};

MostPopularBookList.propTypes = {
    books: PropTypes.array.isRequired,
    order: PropTypes.func.isRequired
};

export default MostPopularBookList;
