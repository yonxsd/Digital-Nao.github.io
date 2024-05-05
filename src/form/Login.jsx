
import React, { useState } from "react";
import {Formik,Form,Field,ErrorMessage } from  'formik';
import { useDispatch } from "react-redux";
import { login } from "../features/userSelice";
import img from '../assets/imgform.jpg';
import "./Form.css"
const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
        login({
         name: name,
         email: email,
         password: password,
         loggedIn: true,
        })
      );
    };

    return (
        <div className="fr">
          <Formik
              initialValues={{
                name:'',
                correo:'',
                teléfono:'',
                password:'',
                confirmPassword:''  
              }}
              //validaciones
             validate={(valores) => {
                let errores = {};
                //validación de nombre
                if(!valores.name){
                  errores.name = 'porfabor ingresar nombre completo'
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                  errores.name = 'El nombre solo debe contener letras y espacios'
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
                
               
              }}
            >
              {({errors} ) => (
                //formulario
                <Form className='form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here 📝</h1>
                <div className="nom">
                <label htmlFor="nombre">Full name</label>
                <Field
                 type="name" 
                  id="name"
                 placeholder="Name"
                 name="name" 
                 value={name} 
                 onChange={(e) => setName(e.target.value)}
                  
                />
                <br />
                  <br />
                  <br />
                  <br />
                <ErrorMessage name="name" component={() => (
                    <div className='error1'>{errors.name}</div>
                  )} />
                </div>
                <div className="cor">
                <label htmlFor="correo">Email</label>
                <Field 
                 type="email"  
                 id='correo' 
                 name='correo'
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} 
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
                <div className="con">
                <label htmlFor="password">Password</label>
                <Field
                 type="password"
                 id='password' 
                 name='password'
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} 
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
                <button type="submit" className="submit_btn">
                  submit
                </button>
               
              </Form>
              )}
            </Formik>
             {/*imagen del formulario */}
            <div className=' img'>
              <img src={img} alt="" />
            </div>
        </div>
    );
};
export default Login