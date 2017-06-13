import React, {PropTypes} from 'react';
import ConfirmModal from '../../common/ConfirmModal';


const AuthorForm = ({hide, isOpen, author,
                          onClose, onUpdate, onSave,
                          isConfirmModalOpen, isConfirmModalHide,
                          onConfirmSave, countries, onSelect}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div>

            <div className="backdrop-style categories">
                <div className={hide ? 'modal-content categories' : 'modal-content-back categories'}>
                    <div>Dodaj/Edytuj autora</div>
                    <hr />
                    <form >
                        <label>Imie</label>
                        <input className="form-input" name="name" placeholder="name" type="text" value={author.name} onChange={onUpdate} />
                        <label>Nazwisko</label>
                        <input className="form-input" name="surname" placeholder="surname" type="text" value={author.surname} onChange={onUpdate} />
                        <label>Narodowość</label>
                        <select className="form-input" onChange={onSelect} value={countries.filter(country => country.id === author.countryId)[0].id}>
                            {countries.map(country => <option key={country.id} id={country.id}
                                                                      value={country.id}>{country.name + ' '}
                                                                      </option>)}
                        </select>
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

AuthorForm.propTypes = {
    hide: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    author: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    isConfirmModalOpen: PropTypes.bool.isRequired,
    isConfirmModalHide: PropTypes.bool.isRequired,
    onConfirmSave: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired

};

export default AuthorForm;
