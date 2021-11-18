import Layout from '../components/layout'
import Aliados from '../components/aliados'


import styles from './preguntas-frecuentes.module.scss'

import OwnImage from '../components/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PreguntasFrecuentes() {
    return (
        <Layout
            title='Preguntas frecuentes  | I.E.S.T.P. Florencia de Mora'
            description='Descripción sobre el personal directivo de la Institución'
        >
            <div className={`${styles.wrapperBannerPreguntas} container-fluid px-0`}>
                <div className='container'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='me-5'>
                            <OwnImage src="/img/callcenter.png" layout="fill" width="200px"></OwnImage>
                        </div>
                        <div><h1>PREGUNTAS FRECUENTES</h1>
                            <p><FontAwesomeIcon className='ms-3' icon={'envelope'}></FontAwesomeIcon> mesadepartesiestpfm @gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className="accordion my-5" id="accordionExample">

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. ¿Dónde me inscribo para rendir el examen de admisión?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Puedes registrarte haciendo click en el siguiente formulario: <span><a href='https://forms.gle/pHzQ4KVJniDxiH8z9' target='_blank'>LINK</a></span>
                                        </p>


                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2. ¿Cuál es el costo de inscripción para el examen de admisión?

                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            El costo de inscripción para el examen de admisión es de S/.50.00
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        3. ¿Cuál es el costo de la matrícula?

                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            El costo de la matrícula es de S/.120.00
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        4. ¿Se paga pensión por estudiar algún Programa?

                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>No existe pago de pensión por estudiar nuestros programas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        5. ¿Cómo hago para obtener online mi certificado original de culminación de estudios secundarios?

                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Puedes obtener más información ingresando al siguiente enlace: <span><a href='https://certificado.minedu.gob.pe' target='_blank'>LINK</a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        6. ¿Qué hago si mi certificado de culminación de estudios secundarios, está en trámite?

                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Durante el proceso de inscripción online en nuestra web, podrás descargar una declaración jurada y subirla por ese medio. También puedes descargarla haciendo click <span><a href='https://docs.google.com/document/d/1WcQx2BKiZ7rwr5intf8wqFB-UpGvg2ik/edit?usp=sharing&ouid=116515363348173258777&rtpof=true&sd=true' target='_blank'>Aquí</a></span>


                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        7. ¿Las clases serán virtuales o presenciales?

                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            En coordinación para el año 2022.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        8. ¿Cuál es el horario o turno de clases?

                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Turno: tarde, de 01:30pm a 07:05pm


                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        9. ¿Tienes alguna duda o inconveniente con tus pagos?

                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Comunícate a nuestros canales de atención:</p>
                                        <p>Celular: 987 870 019</p>
                                        <p>Correo: mesadepartesiestpfm@gmail.com</p>

                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        10. ¿El título se otorga a nombre de la Nación?

                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Si.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEleven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                        11. ¿Se puede realizar traslados de un Instituto privado ó público?
                                    </button>
                                </h2>
                                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Si.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwelve">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                        12. ¿Hay facilidades para los estudiantes que trabajan?



                                    </button>
                                </h2>
                                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Si.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='row justify-content-center my-5'>
                    <div className={`${styles.wrapperPreguntasBuzon} col-5`}>
                        <p>SI AUN NO ENCUENTRAS LO QUE BUSCAS, ENCUÉNTRANOS <span><a href="https://wa.me/+51970584592?text=Hola%20I.E.S.T.P.%20Florencia%20De%20Mora%20deseo%20recibir%20información%20sobre:%20" target='_blank'>AQUÍ</a></span></p>
                    </div>
                </div>
                <Aliados/>
            </div>
        </Layout>

    )
}