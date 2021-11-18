import Layout from '../components/layout'
import Aliados from '../components/aliados'

import Link from 'next/link'

import Image from 'next/image'

import OwnImage from '../components/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './tramites.module.scss'

export default function Tramites() {
  return (
    <Layout
      title='Trámites  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de los trámites de la institucion'
    >
      <div className={`${styles.wrapperBannerMesa} container-fluid px-0`}>
        <div className='container'>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='me-5'>
              <OwnImage src="/img/callcenter.png" layout="fill" width="200px"></OwnImage>
            </div>
            <div><h1>MESA DE PARTES VIRTUAL</h1>
              <p><FontAwesomeIcon className='ms-3' icon={'envelope'}></FontAwesomeIcon> mesadepartesiestpfm @gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapperTramites} container my-5`}>

        <div className='row justify-content-center'>
          <div className='col-9'>
            <div className="d-flex align-items-start">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Ventanilla Única</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Trámites Frecuentes</button>
                <Link href='/contacto'>
                  <a className="nav-link">Contacto</a>
                </Link>
                {/* <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Contacto</button> */}

              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className='row'>
                    <div className='col'>
                      <h5>GESTIONES FRECUENTES</h5>
                      <p>
                        Te brindamos una relación de procedimientos documentarios más utilizados en nuestro Instituto, incluso encontrarás los formatos y flujogramas para que los trámites que desees realizar sean ágiles y rápidos.
                      </p>
                      <p>
                        Si no encuentras el procedimiento de algún trámite que necesitas, por favor, no dudes en comunicarte con:
                      </p>
                      <p>
                        IESTPFM: mesadepartesiestpfm@gmail.com

                      </p>
                      <p>
                        Recuerda que los trámites deben realizarse a través de nuestro formulario haciendo click en: MESA DE PARTES


                      </p>

                      <p>Objetivos:</p>
                      <ul>
                        <li>
                          Agilizar los trámites internos requeridos por alumnos, padres de familia y público en general.

                        </li>
                        <li>
                          Simplificar los trámites, disminuir los puntos de atención, mejorar la oportunidad de la información y personalizar la atención al usuario.

                        </li>
                      </ul>
                      <p>Horarios de atención</p>
                      <ul>
                        <li>
                          Lunes a Viernes de 8:00 a.m. a 7:00 p.m.


                        </li>
                        <li>
                          Sábado de 8:30 a.m. a 12:30 p.m.


                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <h5>GESTIONES FRECUENTES</h5>
                  <p>
                    Te brindamos una relación de procedimientos documentarios más utilizados en nuestro Instituto, incluso encontrarás los formatos y flujogramas para que los trámites que desees realizar sean ágiles y rápidos.
                  </p>
                  <p>
                    Si no encuentras el procedimiento de algún trámite que necesitas, por favor, no dudes en comunicarte con:
                  </p>
                  <p>
                    IESTPFM: mesadepartesiestpfm@gmail.com

                  </p>

                  <p>Información:</p>

                  <div className='row justify-content-center'>
                    <div className='col-11'>
                      <div className="accordion my-5" id="accordionExample">

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Carnet
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>CARNÉ DE ESTUDIANTE (1/2 pasaje)</span> <br />
                                1. Solicitud dirigida a la Directora General <br />
                                2. Recibo de Pago S/25.00 <br /> <br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/25.00 <br /> <br />

                                <span className='fw-bold'>CARNÉ DE BIBLIOTECA</span> <br />
                                1. Recibo de Pago<br /> <br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/5.00
                              </p>


                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Incripción del postulante
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>MODALIDAD ORDINARIO</span> <br />
                                1. Recibo de Pago <br /> <br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/. 50.00 <br />
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Traslado
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>TRASLADO INTERNO (de una carrera a otra)</span> <br />
                                1. Solicitud dirigida a la Directora General <br />
                                2. Boleta de notas original<br />
                                3. Recibo de Pago<br /> <br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/40.00 <br /> <br />

                                <span className='fw-bold'>TRASLADO EXTERNO (Proceso de traslado no es matrícula)</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Adquisición de Carpeta de Postulante en Tesorería.<br />
                                3. Copia de Partida de nacimiento y copia de DNI<br />
                                4. Dos fotos de frente a color tamaño carné<br />
                                5. Certificado de Estudios originales de la Institución de procedencia, visados por la GRELL-UGEL.<br />
                                6. Recibo de Pago por el trámite de traslado Externo<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/150.00

                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              Matricula
                            </button>
                          </h2>
                          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>MATRÍCULA INGRESANTE</span> <br />
                                1. Recibo de pago<br /> <br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/120.00 <br /><br />

                                <span className='fw-bold'>MATRÍCULA INGRESANTES EXTEMPORÁNEA</span> <br />
                                1. Recibo de pago <br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/140.00<br /><br />

                                <span className='fw-bold'>RATIFICACIÓN DE MATRÍCULA</span> <br />
                                1. Copia de Boleta de Notas<br />
                                2. Recibo de pago<br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/120.00<br /><br />

                                <span className='fw-bold'>RESERVA DE MATRÍCULA</span> <br />
                                1. Solicitud dirigida a la Directora Generals<br />
                                2. Pago de matrícula<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/10.00
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              Derecho de convalidación
                            </button>
                          </h2>
                          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>CONVALIDACIÓN DE ESTUDIO (por semestre)</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Certificados de Estudios original<br />
                                3. Sílabos copia<br />
                                4. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/120.00<br /><br />

                                <span className='fw-bold'>CONVALIDACIÓN POR UNIDAD DIDÁCTICA</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Silabo copia<br />
                                3. Recibo de pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/20.00<br /><br />

                                <span className='fw-bold'>CONVALIDACIÓN DE PRÁCTICAS</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Constancia de trabajo firmada por empresa Original<br />
                                3. Recibo de pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/100.00
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                              Repitencia y Reingreso
                            </button>
                          </h2>
                          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>DE UNIDAD DIDÁCTICA(estudiante)</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Copia de boleta de notas<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/30.00<br /><br />

                                <span className='fw-bold'>REINGRESO</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Recibo de pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/10.00
                              </p>

                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                              Evaluación Extraordinaria
                            </button>
                          </h2>
                          <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>EVALUACIÓN EXTRAORDINARIA</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Copia de constancia de Notas<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/60.00
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                              Evaluación de recuperación
                            </button>
                          </h2>
                          <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>EVALUACIÓN DE RECUPERACIÓN</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/25.00
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                              Constancias y otros
                            </button>
                          </h2>
                          <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>CONSTANCIA DE ESTUDIOS, MATRICULA, EGRESADO Y NOTAS</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/25.00<br /><br />

                                <span className='fw-bold'>CONSTANCIA DE NO ADEUDAR, TITULO EN TRÁMITE, TERCIO SUPERIOR O CONDUCTA, DE PRACTICAS</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/25.00<br /><br />

                                <span className='fw-bold'>DIPLOMA DE EGRESADO</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. Foto a color tamaño pasaporte<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/30.00
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                              Certificado de estudios
                            </button>
                          </h2>
                          <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>
                                <span className='fw-bold'>EXPEDICIÓN DE CERTIFICADO DE ESTUDIOS ( x 6 semestres)</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. 02 fotos tamaño carné<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/98.00<br /><br />

                                <span className='fw-bold'>EXPEDICIÓN DE CERTIFICADO DE ESTUDIOS (por 1 semestre)</span> <br />
                                1. Solicitud dirigida a la Directora General<br />
                                2. 02 fotos tamaño carné<br />
                                3. Recibo de Pago<br /><br />

                                <span className='fw-bold'>IMPORTE A PAGAR</span> <br />
                                S/20.00
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>

              </div>
            </div>
          </div>
        </div>




        <Aliados />
      </div>

    </Layout>

  )
}