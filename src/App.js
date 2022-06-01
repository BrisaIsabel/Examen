import './App.css';
import './css/Styles.css'
//import login from "./components/login.js";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import './css/FormDemo.css';
import React, {useEffect, useState} from 'react';
import { classNames } from 'primereact/utils';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';

import Inicio from './components/Inicio';


const App = () => {

  //const Inicio = new Inicio();
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
  const [sexo, setSexo] = useState(null);
  const [btnGuardar, setBtnGuardar] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue
  } = useForm();

  const limpiar = () => {
    reset({
      nombre: '',
      email: '',
      estados: '',
    });
  }

  const onSubmitGuardar = (data) => {
    limpiar();
    //setBtnGuardar(true);
  }
  const getFormErrorMessage = (name) => {
    return (errors[name] && <small className='p-error'> {errors[name].message}</small>);
  };

  return (
    <div>
      <div className="form-demo">
        <form id="Login" key={1} className="p-fluid p-formgrid p-grid" onSubmit={handleSubmit(onSubmitGuardar)} >
          <div className="flex justify-content-center flex-column pt-6 px-3">
          <div className="field p-center">
            <h3>Inicio</h3>
            </div>  
            {/** Nombres */}
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="nombre"
                  control={control}
                  rules={{ required: "Este campo es Requerido*" }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.nombre}
                      {...field}                      
                      className={classNames({ "p-invalid": fieldState.invalid })}
                      onChange={(e) => { field.onChange(e.target.value); }}
                      type="text"
                    />
                  )}
                />
                <label htmlFor="nombre" className={classNames({ "p-error": errors.nombre })}>
                  {"Nombre(s)"}
                </label>
              </span>
              {getFormErrorMessage("nombre")}
            </div>
            {/** Email */}
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Este campo es Requerido*" }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.email}
                      {...field}                      
                      className={classNames({ "p-invalid": fieldState.invalid })}
                      onChange={(e) => { field.onChange(e.target.value); }}
                      type="email"
                    />
                  )}
                />
                <label htmlFor="email" className={classNames({ "p-error": errors.email })}>
                  {"Email"}
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
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
            {/** CheckBox */}
            <div className="field-checkbox">

              <Controller
                name="accept"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Checkbox
                    inputId={field.name}
                    onChange={(e) => field.onChange(e.checked)}
                    checked={field.value}
                    className={classNames({ 'p-invalid': fieldState.invalid })} />
                )} />
              <label
                htmlFor="accept"
                className={classNames({ 'p-error': errors.accept })}>
                {"Aceptar Términos y Condiciones"}
              </label>
            </div>
            {/** RadioButton */}
            <div className="field">
                <div className="p-field-radiobutton">
                  <RadioButton inputId="sexo" name="sexo" value={2} onChange={(e) => setSexo(e.value)} checked={sexo === 2} />
                  <label htmlFor="sexo">{"Mujer"}</label>
                </div>
              </div>  
              <div className="field">
                <div className="p-field-radiobutton">
                  <RadioButton 
                    inputId="sexo" 
                    name="sexo" 
                    value={3} 
                    onChange={(e) => setSexo(e.value)} 
                    checked={sexo === 3} />
                  <label htmlFor="sexo">{"Hombre"}</label>
                </div>
              </div>  

            <div className="field">
              <Button label="Guardar" form='Login' onClick={Inicio()} />
            </div>
            {/* <div>
              { btnGuardar ? (<Inicio id={Inicio}></Inicio>): null}
            </div> */}
          </div>
         <Inicio></Inicio> 
        </form>
      </div>
    </div>
  );
}

export default App;
