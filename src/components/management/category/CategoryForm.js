import React, {PropTypes} from 'react';
import ConfirmModal from '../../common/ConfirmModal';


const CategoryForm = ({hide, isOpen, category, onClose, onUpdate, onSave, isConfirmModalOpen, isConfirmModalHide, onConfirmSave}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div>

            <div className='backdrop-style categories'>
                <div className={hide ? 'modal-content categories' : 'modal-content-back categories'}>
                    <div>Dodaj/Edytuj kategorie</div>
                    <hr />
                    <form >
                        <label>Nazwa</label>
                        <input className="form-input" name="name" placeholder="name" type="text" value={category.name} onChange={onUpdate} />
                        <input type="submit" value="dodaj/edytuj" className="form-button login" onClick={onConfirmSave}/>
                    </form>
                    <div className="footer">
                        <button className="form-button abort" onClick={onClose}>
                            Zamknij
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmModal isOpen={isConfirmModalOpen} hide={isConfirmModalHide} onClose={onConfirmSave} onAction={onSave}/>
        </div>

    );
};

CategoryForm.propTypes = {
    hide: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    category: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    isConfirmModalOpen: PropTypes.bool.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmSave: PropTypes.func.isRequired

};

export default CategoryForm;
