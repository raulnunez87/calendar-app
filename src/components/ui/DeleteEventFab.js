import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { eventStartDelete } from '../../actions/events';

const DeleteEventFab = () => {
    
    const dispatch = useDispatch();
    const { activeEvent } = useSelector(state => state.calendar);

    const handleDeleteEvent = () => {

        dispatch( eventStartDelete() );

    }

    return (
        <button
            className="btn btn-danger fab-danger"
            hidden={ activeEvent ? false : true }
            onClick={ handleDeleteEvent }
        >
            <i className="fas fa-trash"></i>
            <span> Borrar Evento </span>
        </button>
    )
}

export default DeleteEventFab;
