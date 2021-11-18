import Image from 'next/image'
import Link from 'next/link'

import styles from './footer.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer className={`"bg-light" ${styles.footer}`}>
            <div className="container text-center text-md-start">
                <div className={styles.footerTop}>
                    <div className='row'>

                        <div className='col-12 col-md-3'>
                            <Image
                                src='/img/logo.png' // Route of the image file
                                height={100} // Desired size with correct aspect ratio
                                width={100} // Desired size with correct aspect ratio
                                alt="Logo Instituto Superior"
                            />
                        </div>

                        <div className='col-12 col-md-2'>
                            <h4>Nosotros</h4>
                            <ul className="nav flex-column ">
                                <li className='nav-item'>
                                    <a className='nav-link text-light' href='/nosotros/personal-directivo'>Personal Directivo</a>

                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link text-light' href='/nosotros/mision-vision'>Misión y Visión</a>

                                </li>
                                <li className='nav-item'>
                                    <Link href='/nosotros/resena-historica'>
                                        <a className='nav-link text-light'>Reseña Histórica</a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/nosotros/objetivos-estrategicos'>
                                        <a className='nav-link text-light'>Objetivos estratégicos</a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/nosotros/documentos-gestion'>
                                        <a className='nav-link text-light'>Documentos de Gestión</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-2'>
                            <h4>Programas</h4>
                            <ul className="nav flex-column ">
                                <li className='nav-item'>
                                    <a className='nav-link text-light' href='/programas/contabilidad'>Contabilidad</a>

                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link text-light' href='/programas/enfermeria'>Enfermería</a>

                                </li>                               
                            </ul>
                        </div>

                        <div className='col-12 col-md-2'>
                            <h4>Servicios</h4>
                            <ul className="nav flex-column ">
                            <li className='nav-item'>
                                    <a className='nav-link text-light' href='/servicios/formacion-continua'>Formación continua</a>

                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link text-light' href='https://aulavirtual.iestpfm.edu.pe/moodle30/login/index.php' target='_blank'>Aula Virtual</a>

                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link text-light' href='https://www.alphaeditorialcloud.com/auth/login' target="_blank">Biblioteca Virtual</a>

                                </li>
                                <li className='nav-item'>
                                    <Link href='/tramites'>
                                        <a className='nav-link text-light'>Trámites</a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/servicios/libro-reclamaciones'>
                                        <a className='nav-link text-light'>Libro de reclamaciones</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.wrapperContacto} col-12 col-md-3`}>
                            <h4>Contáctanos</h4>
                            <div >
                                <div className='d-flex mb-2'>
                                    <div className={styles.wrapperIcon}>
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']}></FontAwesomeIcon>

                                    </div>
                                    <span>Síguenos en Facebook</span>
                                </div>

                                <div className='d-flex mb-2'>
                                    <div className={styles.wrapperIcon}>
                                        <FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon>
                                    </div>
                                    <span>Escríbenos por WhatsApp</span>
                                </div>

                                <div className='d-flex'>
                                    <div className={styles.wrapperIcon}>
                                        <FontAwesomeIcon icon={'mobile-alt'}></FontAwesomeIcon>
                                    </div>
                                    <span>Llámanos al 942 884 208</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className={`'container-fluid' ${styles.footerBottom}`}>
                <div className='container'>
                    <div className='row row-cols-1 row-cols-sm-2'>
                        <div className=''>
                            <span>© 2021 Instituto superior Florencia de Mora.  Todos los derechos reservados</span>
                        </div>
                        <div className='d-flex justify-content-end'>
                        <a className='me-3' href='/politicas-institucionales'>Políticas Institucionales</a>
                                <a href='/preguntas-frecuentes'>Preguntas Frecuentes</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

