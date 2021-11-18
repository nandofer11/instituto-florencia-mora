import Layout from '../../components/layout'
import Aliados from '../../components/aliados'

import Image from 'next/image'

import styles from './personal-directivo.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PersonalDirectivo() {
    return (
        <Layout
            title='Personal Directivo  | I.E.S.T.P. Florencia de Mora'
            description='Descripción sobre el personal directivo de la Institución'
        >
            <div className={`${styles.wrapperPersonal} container my-5`} >

                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <h2 className='text-center mb-4'>PRESENTACIÓN</h2>

                        <p>
                            Bienvenidos al Instituto de Educación Superior Tecnológico Público “Florencia de Mora”
                            del distrito de Florencia de Mora, provincia de Trujillo y región La Libertad; que nace
                            con el objetivo de brindarle todas las posibilidades para que puedan convertir su
                            talento, en fuente de sabiduría, desarrollo y satisfacción para Uds y de nuestra patria.
                        </p>

                        <p>
                            Nuestros dos Programas de estudios que les ofrecemos gozan de una amplia demanda en el
                            mercado laboral, nacional e internacional, lo que les permitirá desempeñarse con éxito,
                            una vez egresados. El desarrollo de competencias para la generación será el sello que se
                            les distinga como egresados de nuestra emblemática Institución.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center row-cols-1 row-cols-lg-3 mt-5">

                    <div className="col-8 col-md-6">
                        <div className={`${styles.cardPersonal} card card-body p-md-4`}>
                            <div className="row align-items-center">
                                <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                                    <img alt="image" className="img-fluid rounded-circle" src="/img/directora.jpeg" />
                                </div>
                                <div className="col-md-8 mt-4 mt-md-0">
                                    <p className="text-h3 mb-0"><strong>Ibañez Escobedo, Maribel Y.</strong>
                                    </p>
                                    <p className='mb-0'><em>Directora General</em></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-md-6">
                        <div className={`${styles.cardPersonal} card card-body p-md-4`}>
                            <div className="row align-items-center">
                                <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                                    <img alt="image" className="img-fluid rounded-circle" src="/img/jefa_academica.jpeg" />
                                </div>
                                <div className="col-md-8 mt-4 mt-md-0">
                                    <p className="text-h3 mb-0"><strong>Robles León, Mercedes Edita</strong>
                                    </p>
                                    <p className='mb-0'><em>Jefe de unidad académica</em></p>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


                <Aliados />

            </div>
        </Layout>

    )
}