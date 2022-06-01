import React, { useEffect, useState } from 'react';
import { classNames } from 'primereact/utils';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';

const Login = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        setValue
    } = useForm(); 

    return (
        <>
            <div className="p-grid">
                <form id="login" key={1} className="p-col-12 p-mt-3" >
                    <div className="p-field p-grid">
                        <span className='float-label'>
                        <Controller
                            name="nombre"
                            control={control}

                            
                        ></Controller>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;