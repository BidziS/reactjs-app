import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CategoryListRow = ({category,onDelete}) => {
    return (
        <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
            <div className="item-homepage">
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-xs-9 item-description">
                        <h4>{category.name}</h4>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xs-3 manage-item">
                        <button className="manage-item-options edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                        <button value={category.id} onClick={onDelete} className="manage-item-options delete"><i value={category.id} id={category.id} className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CategoryListRow.propTypes = {
    category: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default CategoryListRow;
