import Layout from '../../components/layout'

import Aliados from '../../components/aliados'

import Image from 'next/image'
import OwnImage from '../../components/Image'

import styles from './contabilidad.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contabilidad() {
    return (
        <Layout
            title='Contabilidad | I.E.S.T.P. Florencia de Mora'
            description='Formas de contacto de la institucion, misio, vision'
        >
            <div className={`${styles.wrapperBannerConta} container-fluid px-0`}>
                <div className='container'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='me-5'>
                            <OwnImage src="/img/icon_conta.png" layout="fill" width="120px"></OwnImage>
                        </div>
                        <div>
                            <h1>CONTABILIDAD</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.wrapperConta} container`}>
                {/* <div className='row align-items-center'>
                    <div className='col-3'>
                        <h4>Información Académica</h4>
                    </div>
                    <div className='col-9'>
                        <div className={styles.lineaSeparador}></div>
                    </div>
                </div> */}

                <div className='row my-5 justify-content-center gx-5'>
                    <div className='col-12 col-md-5'>

                        <h5>PRESENTACIÓN DEL PROGRAMA DE ESTUDIOS</h5>
                        <p>
                            El programa de estudios de contabilidad forma profesionales
                            técnicos con la capacidad de desenvolverse en las entidades del sector privado y público, con
                            la capacidad de registrar, interpretar, analizar la información de índole contable, tributario,
                            laboral y financiero; todo ello resumido en información brindada a los responsables de las
                            organizaciones para la toma de decisiones oportuna y eficaz.
                        </p>
                    </div>
                    <div className='col-12 col-md-5 text-center'>
                        <Image src='/img/docente_contabilidad.png' width='324' height='182' />
                        <p className="text-center fw-light mb-0">Mg. C.P.C. Miguel Gutiérrez Muñoz </p>
                        <p className='text-center'>Coordinador Académico.</p>
                    </div>
                </div>

                <div className='row justify-content-center gx-5'>
                    <div className={`${styles.wrapperPerfilEgre} col-12 col-md-5 py-4`}>
                    <OwnImage src="/img/perfil-egresado-conta.jpg" layout="fill" width="420px"></OwnImage>
                        <h5 className='mt-3'>PERFIL DEL EGRESADO</h5>
                        <p>
                            Los egresados del programa de contabilidad del IESTP se desempeñarán en las áreas de costos, auditoría, tributación,
                            laboral y financiera de las diferentes organizaciones; entre las cuales tenemos: Empresas comerciales, industriales, de
                            servicios, pesqueras, mineras, agropecuaria, constructoras y ONGs. Entidades financieras, tales como: bancos, cajas
                            municipales, edpymes, cooperativas de ahorro y crédito, empresas importadoras, exportadoras y otras unidades productivas,
                            sí como instituciones públicas.
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
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Contabilidad General I
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Plan contable
                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Documentación Comercial y Contable

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Administración Empresarial

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Técnicas de comunicación

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Informática e internet

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
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Contabilidad Gubernamental I

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Aplicativos Informáticos

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Sociedad y Economía en la Globalización

                                                    </li>
                                                    <li className='nav-item'>
                                                        <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Investigación e Innovación Tecnológica

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




                {/* <div className='row align-items-center'>
                    <div className='col-3'>
                        <h4>Plana Docente</h4>
                    </div>
                    <div className='col-9'>
                        <div className={styles.lineaSeparador}></div>
                    </div>
                </div> */}


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