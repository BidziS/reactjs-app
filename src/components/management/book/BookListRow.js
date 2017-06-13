import React, {PropTypes} from 'react';

const BookListRow = ({book, authors, covers, categories, carriers, onDelete, onEdit}) => {
    return (
        <tr>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {book.title}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {authors.filter(author => author.id === book.authorId)[0].name + ' ' +  authors.filter(author => author.id === book.authorId)[0].surname}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {categories.filter(category => category.id === book.categoryId)[0].name}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {carriers.filter(carrier => carrier.id === book.carrierId)[0].name}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {covers.filter(cover => cover.id === book.coverId)[0].name}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {book.price}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3">
                {book.isbn}
            </td>
            <td className="bg-info col-lg-3 col-md-3 col-sm-3 col-xs-3 row-manage-item">
                <button className="manage-item-options edit" value={book} id={book.id} onClick={onEdit}><i className="fa fa-pencil" aria-hidden="true" id={book.id} value={book}></i></button>
                <button id={book.id} value={book.id} onClick={onDelete} className="manage-item-options delete"><i value={book.id} id={book.id} className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        </tr>
    );
};

BookListRow.propTypes = {
    book: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    carriers: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired
};

export default BookListRow;
