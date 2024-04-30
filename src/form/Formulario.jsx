import React from 'react'
import "./Form.css"
import { Formik,Form,Field,ErrorMessage } from 'formik'
import img from '../assets/imgform.jpg';
const Formulario = () => {
  return (
    <>
       <div className='fr'>
          <Formik>
            
            <form className='form'>
              <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' name='nombre' placeholder='jonny' />
              </div>
              <div>
                <label htmlFor="correo">Correo</label>
                <input type="text"  id='correo' name='nombre' placeholder='correo@correo.com' />
              </div>
              <button type='submit'>enviar</button>
            </form>
          </Formik>
          <div className=' img'>
            <img src={img} alt="" />
          </div>
        </div>
    </>
  )
}

export default Formulario
