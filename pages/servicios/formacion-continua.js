import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'

import Image from 'next/image'
import OwnImage from '../../components/Image'

import styles from './formacion-continua.module.scss'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Admision() {
    return (
        <Layout
            title='Formación continua  | I.E.S.T.P. Florencia de Mora'
            description='Descripn acerca de la admision en la institucion, misio, vision'
        >
            <div className={`${styles.wrapperBannerFormacion} container-fluid px-0`}>
                <div className='container'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='me-5'>
                            <OwnImage src="/img/callcenter.png" layout="fill" width="200px"></OwnImage>
                        </div>
                        <div><h1>FORMACIÓN CONTINUA</h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.wrapperEspecialidades} container my-5  `}>
                <h2 className='mb-3 text-center'>SEGUNDAS ESPECIALIDADES</h2>
                <div className='row mt-5 text-center'>
                    <div className='col-12 col-md-6'>
                        <Image src='/img/contable1.jpeg' width='460' height='241' /> <br />
                        <h5 className='mb-0'>CONTABILIDAD: ESPECIALIACIÓN CORPORATIVO</h5>
                        <Link href='/programas/contabilidad'>
                            <a className='mt-4 btn btn-danger'>
                                Más información
                            </a>
                        </Link>
                    </div>
                    <div className='col-12 col-md-6'>
                        <Image src='/img/enfermera1.jpg' width='460' height='241' /> <br />
                        <h5 className='mb-0'>ENFERMERÍA: ESPECIALIACIÓN CLÍNICA</h5>
                        <Link href='/programas/enfermeria'>
                            <a className='mt-4 btn btn-danger'>
                                Más información
                            </a>
                        </Link>

                    </div>
                </div>

                <div className='container my-5'>
                    <h2 className='text-center'>¿Por qué especializarse?</h2>
                    <p className='mb-5 text-center'>Una de las razones que motivan a algunas personas a especializarse es
                        ascender, cambiar de puesto u obtener <br />un mejor salario. También puede
                        ser un trampolín que nos ayude a cambiar de área y darle un nuevo enfoque
                        a nuestro futuro laboral.</p>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div className={`${styles.cardEspecialidad} card card-body p-md-5`}>
                                <div className="row ">
                                    <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                                        <img alt="image" className="img-fluid rounded-circle" src="/img/dr1.png" />
                                    </div>
                                    <div className="col-md-8 mt-4 mt-md-0">
                                        <p className="text-h3">
                                            Especialista Fulbright. Docente principal y enfermera investigadora
                                            de la Universidad de Alabama – USA, con más de 67 publicaciones en
                                            revistas especializadas (SCOPUS).
                                        </p>
                                        <p className="text-h3 mt-4 mt-xl-5"><strong>Dra. Norma Cuellar</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 d-flex align-items-stretch'>
                            <div className={`${styles.cardEspecialidad} card card-body p-md-5`}>
                                <div className="row ">
                                    <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                                        <img alt="image" className="img-fluid rounded-circle" src="/img/dr2.png" />
                                    </div>
                                    <div className="col-md-8 mt-4 mt-md-0">
                                        <p className="text-h3">
                                            Presidenta del Consejo Internacional de Enfermería (CIE) en Latinoamérica.
                                            Directora de la Escuela de Enfermería de la Universidad Católica Silva – Henriquez (Chile).
                                        </p>
                                        <p className="text-h3 mt-4 mt-xl-5"><strong>Mg. Ericka Caballero</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 d-flex align-items-stretch'>
                            <div className={`${styles.cardEspecialidad} card card-body p-md-5`}>
                                <div className="row ">
                                    <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                                        <img alt="image" className="img-fluid rounded-circle" src="/img/dr3.png" />
                                    </div>
                                    <div className="col-md-8 mt-4 mt-md-0">
                                        <p className="text-h3">
                                            Funcionaria del Instituto Catalán de la Salud. Enfermera experta en
                                            Enfermería Familiar y Comunitaria.
                                        </p>
                                        <p className="text-h3 mt-4 mt-xl-5"><strong>RMg. Mary Jane Chu</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Layout>

    )
}