import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleAddNewEvent = () => {
        dispatch( uiOpenModal() );
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleAddNewEvent }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddNewFab;
