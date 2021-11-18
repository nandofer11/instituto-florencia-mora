import Layout from '../../components/layout'
import Aliados from '../../components/aliados'

import Image from 'next/image'
import OwnImage from '../../components/Image'

import styles from './enfermeria.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Enfermeria() {
    return (
        <Layout
            title='Enfermería | I.E.S.T.P. Florencia de Mora'
            description='Formas de contacto de la institucion, misio, vision'
        >
            {/* <div className='container-fluid px-0'>
                <Image src='/img/banner-enfermeria.png' width='1581' height='400' />
            </div> */}
            <div className={`${styles.wrapperBannerEnf} container-fluid px-0`}>
                <div className='container'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='me-5'>
                            <OwnImage src="/img/icon-enf.png" layout="fill" width="74px"></OwnImage>
                        </div>
                        <div>
                            <h1>ENFERMERÍA</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.wrapperEnfermeria} container`}>

                <div className='row my-5 justify-content-center gx-5'>
                    <div className='col-12 col-md-5'>

                        <h5>PRESENTACIÓN DEL PROGRAMA DE ESTUDIOS</h5>
                        <p>
                            El Técnico en Enfermería es un técnico de nivel superior capacitado para integrar equipos de salud, colaborando
                            con los profesionales del área en la ejecución de procedimientos básicos de enfermería y en la atención
                            humanitaria del individuo, la familia y la comunidad. La formación integral del futuro profesional de Enfermería
                            Técnica, requiere de la organización y desarrollo del Plan de Estudio o estructura curricular organizado en
                            Módulos formativos y en competencias técnico profesionales, competencias para la empleabilidad y las Experiencias
                            Formativas en Situaciones reales de trabajo, competencias que proporcionen al estudiante conocimiento, destrezas
                            y actitudes que habilitan al futuro egresado a la preparación adecuada para la atención técnico – profesional de
                            Enfermería, que sea eficiente y competitivo en su desempeño personal y profesional y pueda integrarse con facilidad
                            al difícil mundo laboral.
                        </p>
                    </div>
                    <div className='col-12 col-md-5 text-center'>
                        <Image src='/img/docente_enfer.png' width='271' height='326' />
                        <p className="text-center fw-light mb-0">Lic. Gutiérrez Rodríguez Iris Alira </p>
                        <p className='text-center'>Coordinadora Académica.</p>
                    </div>
                </div>

                <div className='row justify-content-center gx-5'>
                    <div className='col-12 col-md-5'>
                    <OwnImage src="/img/perfil-egresado-enfe.jpg" layout="fill" width="420px"></OwnImage>
                        <h5 className='mt-3'>PERFIL DEL EGRESADO</h5>
                        <p>
                            Profesional técnico de nivel superior con competencias para planificar, organizar y realizar las actividades del
                            técnico de enfermería en la atención integral de la persona, familia y comunidad en los tres niveles de prevención
                            y atención en el sector público y privado. <br />

                            Capaz de desenvolverse de manera ética, utilizando una comunicación asertiva con calidad, calidez y cumpliendo las normas de bioseguridad y protocolos establecidos. <br />

                            Manejo del idioma inglés para entender y comunicar de manera efectiva instrucciones sencillas, haciendo uso de las tecnologías de información y comunicación. <br />

                            Formando parte del equipo de trabajo en su entorno laboral, con criterios de innovación y emprendimiento para la mejora continua.
                        </p>
                    </div>
                    <div className='col-12 col-md-5'>
                        <h5>MALLA CURRICULAR</h5>
                        <div className='row justify-content-center'>
                            <div className='col'>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                PERIODO ACADÉMICO I
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className='nav flex-column'>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Cuerpo Humano
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Cálculos Fundamentales en Química
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Estadística General

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Interpretación y Producción de Textos

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Medio Ambiente y Desarrollo Sostenible

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Servicios Auxiliares de Proceso

                                                    </li>
                                                </ul> <br />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                PERIODO ACADÉMICO II
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className='nav flex-column'>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Contabilidad General II
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Legislación Laboral
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Fundamentos de Costos

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Estadística general

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Ofimática

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Fundamentos de investigación

                                                    </li>
                                                </ul> <br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                PERIODO ACADÉMICO III
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className='nav flex-column'>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Contabilidad de Costos
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Técnica Presupuestal
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Ensayos de Impacto Ambiental

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Lógica y Funciones

                                                    </li>

                                                </ul> <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={`${styles.wrapperPlanaDocente} container`}>
            <div className='row my-5'>
                    <h5 className='text-center my-5'>PLANA DOCENTE</h5>
                    <div className='col-4 text-center mb-5'>
                        <OwnImage src="/img/egresado3.png" layout="fill" width="150px"></OwnImage>
                        <p className='mt-2'>Lic. Isabel Gavidia Bermúdez</p>
                    </div>
                    <div className='col-4 text-center mb-5'>
                        <OwnImage src="/img/egresado3.png" layout="fill" width="150px"></OwnImage>
                        <p className='mt-2'>Lic. Isabel Gavidia Bermúdez</p>
                    </div>
                    <div className='col-4 text-center mb-5'>
                        <OwnImage src="/img/egresado3.png" layout="fill" width="150px"></OwnImage>
                        <p className='mt-2'>Lic. Isabel Gavidia Bermúdez</p>
                    </div>
                    <div className='col-4 text-center'>
                        <OwnImage src="/img/egresado3.png" layout="fill" width="150px"></OwnImage>
                        <p className='mt-2'>Lic. Isabel Gavidia Bermúdez</p>
                    </div>
                    <div className='col-4 text-center'>
                        <OwnImage src="/img/egresado3.png" layout="fill" width="150px"></OwnImage>
                        <p className='mt-2'>Lic. Isabel Gavidia Bermúdez</p>
                    </div>
                    <div className='col-4 text-center'>
                        <OwnImage src="/img/egresado3.png" layout="fill" width="150px"></OwnImage>
                        <p className='mt-2'>Lic. Isabel Gavidia Bermúdez</p>
                    </div>
                </div>

                <Aliados />
            </div>
        </Layout>

    )
}