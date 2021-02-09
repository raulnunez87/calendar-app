import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';

import Swal from 'sweetalert2';

import './login.css';

const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'raul@gmail.com',
        lPassword: 'hola77' 
    });

    const { lEmail, lPassword } = formLoginValues;

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'Sofia',
        rEmail: 'sofia@gmail.com',
        rPassword: 'hola77',
        rConfirmPassword: 'hola77' 
    });

    const { rName, rEmail, rPassword, rConfirmPassword } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch( startLogin( lEmail, lPassword ) );
    }

    const handleAddNewUser = (e) => {
        e.preventDefault();

        if ( rPassword !== rConfirmPassword ) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales', 'error');
        }

        dispatch( startRegister( rName, rEmail, rPassword ) );
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleAddNewUser }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={ rName }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="rPassword"
                                value={ rPassword }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="rConfirmPassword"
                                value={ rConfirmPassword }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;
