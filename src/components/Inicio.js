import React, { useEffect, useState } from 'react';
import { classNames } from 'primereact/utils';
import { useForm, Controller } from 'react-hook-form';
//import { getDataID } from './getItems'
//import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

const Inicio = () => {

    const lstEstados = [
        { name: 'Aguascalientes', value: 1 },
        { name: 'Baja California', value: 2 },
        { name: 'Baja California Sur', value: 3 },
        { name: 'Campeche', value: 4 },
        { name: 'Coahuila', value: 5 },
        { name: 'Colima', value: 6 },
        { name: 'Chiapas', value: 7 },
        { name: 'Chihuahua', value: 8 }
    ];
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        setValue
    } = useForm();

    return (
        <div>
            <form id="Login" key={2} className="p-fluid p-formgrid p-grid">
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <h5>Componentes</h5>
                    <div className='field'>
                        <span className='p-float-label'>
                            <Controller
                                name="estados"
                                control={control}
                                render={({ field }) => (
                                    <Dropdown
                                        id={field.name}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.value)}
                                        options={lstEstados}
                                        optionLabel="name"
                                        optionValue="value"
                                    />
                                )} />
                            <label htmlFor="estados" className={classNames({ "p-error": errors.estado })}>
                                {"Selecciona tu Estado"}
                            </label>
                        </span>
                    </div>
                </div>
            </form>
        </div>                

                )
}
export default Inicio;