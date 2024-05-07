
import React, { useState } from "react";
import {Formik,Form,Field,ErrorMessage } from  'formik';
import { useDispatch } from "react-redux";
import { login } from "../features/userSelice";
import img from '../assets/imgform.jpg';
import "./Form.css"

const Login = () => {
  const [formularioenviado, cambiarformularioenviado] = useState(false);
   
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
        login({
        
         loggedIn: true,
        })
      );
  };

  return (
    <>
       <div className='fr'>
          <Formik
            
            initialValues={{
              nombre:'',
              correo:'',
              teléfono:'',
              password:'',
              confirmPassword:''  
            }}
            //formulario
            validate={(valores) => {
              let errores = {};
              //validación de nombre
              if(!valores.nombre){
                errores.nombre = 'porfabor ingresar nombre completo'
              }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.nombre = 'El nombre solo debe contener letras y espacios'
              }
              //validación de Correo
              if(!valores.correo){
                errores.correo = 'porfabor ingresar correo electrónico'
              }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                errores.correo = 'El correo solo puede contener letras,números,puntos,guiones y guion bajo'
              }
              //validación de teléfono
              if(!valores.teléfono){
                errores.teléfono= 'porfabor ingresar numero telefónico'
              }else if(!/^\+(?:[1-9] ?){6,14}[1-9]$/.test(valores.teléfono)){
                errores.teléfono = 'El numero telefónico solo puede contener números , comenza con el sigo "+"seguido de entre 6 y 14 dígitos numéricos'
              }
              //validación de teléfono
              if(!valores.password){
                errores.password= 'porfabor ingresar una contraseña'
              }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(valores.password)){
                errores.password = 'La contraseña debe contener mínimo de 8 caracteres ,contener al menos una letra mayúscula ([A-Z]),letra minúscula ([a-z]),al menos un dígito'
              }
              //validación de confirmpassword
              if (valores.password !== valores.confirmPassword) {
                errores.confirmPassword = 'Las contraseñas no coinciden';
              }
              return errores;
            }}
            
            onSubmit={(valores ,{resetForm}) => {
              
                resetForm();
                console.log('registro exitoso');
                cambiarformularioenviado(true);
                setTimeout(() => cambiarformularioenviado (false), 5000); 
               
            }}
           
          >
            {( {values, errors, touched, handleChange, handleBlur} ) => (
              <Form className='form' onSubmit={(e) => handleSubmit(e)}>
               
                {/*formulario */}
               <div >
                 <h1 className='Tit'>Registro Panel Administrativo ⚙️</h1>
               </div>
               <div className='nom'>
                 <label htmlFor="nombre">Full name</label>
                 <Field 
                  type="name" 
                  id='nombre' 
                  name='nombre' 
                  placeholder='johnny' 
                  
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <ErrorMessage name="nombre" component={() => (
                    <div className='error1'>{errors.nombre}</div>
                  )} />
                  
               </div>
               <div className='cor'>
                 <label htmlFor="correo">Email</label>
                 <Field 
                  type="email"  
                  id='correo' 
                  name='correo' 
                  placeholder='Email@Email.com'
                  
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <ErrorMessage name="correo" component={() => (
                    <div className='error2'>{errors.correo}</div>
                  )} />
               </div>
               <div className='cal'>
                 <label htmlFor="teléfono">Phone</label>
                 <Field type="tel"  id='teléfono' name='teléfono' placeholder='+52 351 ........'
                 
                 />
                  <br />
                  <br />
                  <br />
                  <br />
                 <ErrorMessage name="teléfono" component={() => (
                    <div className='error3'>{errors.teléfono}</div>
                  )} />
               </div>
               <div className='con'>
                 <label htmlFor="password">Password</label>
                 <Field type="password"  id='password' name='password' placeholder='password' 
                 
                 />
                 
                 <br />
                  <br />
                  <br />
                  <br />
                 <ErrorMessage name="password" component={() => (
                    <div className='error4'>{errors.password}</div>
                  )} />
               </div>
               <div className='cont'>
                 <label htmlFor="confirmPassword">Confirm Password</label>
                 <Field type="password"  id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' />
                 <br />
                  <br />
                  <br />
                  <br />
                 <ErrorMessage name="confirmPassword" component={() => (
                    <div className='error5'>{errors.confirmPassword}</div>
                  )} />
                </div>
               <button type='submit'>Check in</button>
               <br />
               <br />
               <br />
               <br />
               {formularioenviado  && <span className="loading loading-dots loading-lg cargando"></span>}
             </Form>
            )}
            
          </Formik>
          <div className=' img'>
            <img src={img} alt="" />
          </div>
        </div>
    </>
  )
}

export default Login;

