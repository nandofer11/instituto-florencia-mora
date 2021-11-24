import Layout from '../../components/layout'

import Image from 'next/image'
import OwnImage from '../../components/Image'

import Aliados from '../../components/aliados'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './libro-reclamaciones.module.scss'

import { useState } from 'react'

export default function LibroReclamaciones() {

    const [dni, setDni] = useState('')
    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('')
    const [reclamo, setReclamo] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            dni,
            nombre,
            celular,
            email,
            reclamo,
            mensaje,
            // enviado
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setEnviado(true)
                setDni('')
                setNombre('')
                setCelular('')
                setEmail('')
                setReclamo('')
                // setMensaje('')
            }
        })

    }

    return (
        <Layout
            title='Libro de reclamaciones  | I.E.S.T.P. Florencia de Mora'
            description='Descripn acerca de los servicios de la institucion, misio, vision'
        >

            <div className={`${styles.wrapperBannerLibro} container-fluid px-0`}>
                <div className='container'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='me-5'>
                            <OwnImage src="/img/files.png" layout="fill" width="120px"></OwnImage>
                        </div>
                        <div>
                            <h1>LIBRO DE RECLAMACIONES</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.wrapperLibroReclamaciones} container my-5`}>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <p>
                            Estimado usuario: <br /> <br />

                            Ponemos a su disposición el presente formulario, a través del cual podrá expresar
                            su INSATISFACCIÓN O DISCONFORMIDAD RESPECTO DE LA ATENCIÓN RECIBIDA EN LA I.E.S.T.P.
                            “FLORENCIA DE MORA”.
                        </p>
                        <p>Le informamos que, una vez ingresado el reclamo, el plazo de tramitación del mismo es de 30 días hábiles</p>
                        <p>Puedes enviarnos un correo directo con tu reclamación al:

                            <span className='fw-bolder'> libroreclamacion@iesppmfgb.edu.pe</span></p>
                    </div>
                </div>

                <div className='row justify-content-center mt-5'>
                    <div className='col-8'>
                        <form>
                            {/* <div className="form-group row">
                                <label className="col-4">Tipo de usuario:</label>
                                <div className="col-8">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_0" type="radio" className="custom-control-input" value="estudiante" />
                                        <label for="radio_0" className="custom-control-label">Estudiante</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_1" type="radio" className="custom-control-input" value="padre" />
                                        <label for="radio_1" className="custom-control-label">Padre de familia</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_2" type="radio" className="custom-control-input" value="egresado" />
                                        <label for="radio_2" className="custom-control-label">Egresado</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_3" type="radio" className="custom-control-input" value="publico" />
                                        <label for="radio_3" className="custom-control-label">Público General</label>
                                    </div>
                                </div>
                            </div><br /> */}
                            <div className="form-group row">
                                <label className="col-4 col-form-label">Nro. documento:</label>
                                <div className="col-8">
                                    <input id="text1" name="text1" placeholder="Ingrese nro. DNI" type="text" className="form-control" onChange={(e) => { setDni(e.target.value) }} />
                                </div>
                            </div><br />
                            <div className="form-group row">
                                <label className="col-4 col-form-label">Nombre completo:</label>
                                <div className="col-8">
                                    <input id="text" name="text" placeholder="Nombres y apellidos" type="text" className="form-control" onChange={(e) => { setNombre(e.target.value) }} />
                                </div>
                            </div><br />
                            <div className="form-group row">
                                <label for="text2" className="col-4 col-form-label">Celular:</label>
                                <div className="col-8">
                                    <input id="text2" name="text2" placeholder="Nro. de celular" type="text" className="form-control" onChange={(e) => { setCelular(e.target.value) }} />
                                </div>
                            </div><br />
                            <div className="form-group row">
                                <label for="text3" class="col-4 col-form-label">Correo:</label>
                                <div className="col-8">
                                    <input id="text3" name="text3" placeholder="Ingrese email" type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div><br />
                            <div className="form-group row">
                                <label for="textarea" className="col-4 col-form-label">Reclamo:</label>
                                <div className="col-8">
                                    <textarea id="textarea" name="textarea" cols="40" rows="5" className="form-control" onChange={(e) => { setReclamo(e.target.value) }}></textarea>
                                </div>
                            </div><br />
                            <div className="form-group row">
                                <div className="offset-4 col-8">
                                < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

                <Aliados />

            </div>

        </Layout>

    )
}