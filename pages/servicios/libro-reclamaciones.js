import Layout from '../../components/layout'

import Image from 'next/image'
import OwnImage from '../../components/Image'

import Aliados from '../../components/aliados'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './libro-reclamaciones.module.scss'

export default function LibroReclamaciones() {
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
                            <div class="form-group row">
                                <label class="col-4">Tipo de usuario:</label>
                                <div class="col-8">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="estudiante" />
                                        <label for="radio_0" class="custom-control-label">Estudiante</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="padre" />
                                        <label for="radio_1" class="custom-control-label">Padre de familia</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_2" type="radio" class="custom-control-input" value="egresado" />
                                        <label for="radio_2" class="custom-control-label">Egresado</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input name="radio" id="radio_3" type="radio" class="custom-control-input" value="publico" />
                                        <label for="radio_3" class="custom-control-label">Público General</label>
                                    </div>
                                </div>
                            </div><br/>
                            <div class="form-group row">
                                <label for="text1" class="col-4 col-form-label">Nro. documento:</label>
                                <div class="col-8">
                                    <input id="text1" name="text1" placeholder="Ingrese nro. DNI" type="text" class="form-control" />
                                </div>
                            </div><br/>
                            <div class="form-group row">
                                <label for="text" class="col-4 col-form-label">Nombre completo:</label>
                                <div class="col-8">
                                    <input id="text" name="text" placeholder="Nombres y apellidos" type="text" class="form-control" />
                                </div>
                            </div><br/>
                            <div class="form-group row">
                                <label for="text2" class="col-4 col-form-label">Celular:</label>
                                <div class="col-8">
                                    <input id="text2" name="text2" placeholder="Nro. de celular" type="text" class="form-control" />
                                </div>
                            </div><br/>
                            <div class="form-group row">
                                <label for="text3" class="col-4 col-form-label">Correo:</label>
                                <div class="col-8">
                                    <input id="text3" name="text3" placeholder="Ingrese email" type="text" class="form-control" />
                                </div>
                            </div><br/>
                            <div class="form-group row">
                                <label for="textarea" class="col-4 col-form-label">Reclamo:</label>
                                <div class="col-8">
                                    <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
                                </div>
                            </div><br/>
                            <div class="form-group row">
                                <div class="offset-4 col-8">
                                    <button name="submit" type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

                <Aliados/>

            </div>

        </Layout>

    )
}