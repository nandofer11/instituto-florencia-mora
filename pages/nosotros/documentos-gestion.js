import Layout from '../../components/layout'
import Aliados from '../../components/aliados'


// import Image from 'next/image'
import OwnImage from '../../components/Image'

import styles from './documentos-gestion.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DocumentosGestion() {
    return (
        <Layout
            title='Documentos Gestión  | I.E.S.T.P. Florencia de Mora'
            description='Descripn acerca de los documentos de la Institución'
        >
            <div className={`${styles.wrapperDocGestion} container-fluid px-0`}>
                <div className='container'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='me-5'>
                            <OwnImage src="/img/inbox.png" layout="fill" width="120px"></OwnImage>
                        </div>
                        <div>
                            <h1>DOCUMENTOS DE GESTIÓN</h1>
                        </div>
                        {/* <Image src='/img/callcenter.png' width='257' height='184'/> */}




                    </div>
                </div>
            </div>

            <div className={`${styles.wrapperDocumentos} container my-5`} >

                <p className='fs-4 text-center mb-5'>Publicamos de forma permanente los documentos de interés.</p>

                <div className='row justify-content-center'>
                    <div className='col-9'>
                        <table className="table table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th className='text-center' scope="col">Titulo</th>
                                    <th className='text-center' scope="col">Año</th>
                                    <th className='text-center' scope="col">Descargar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Manual Perfil de puesto</td>
                                    <td className='text-center'>2021</td>
                                    <td className='text-center'>
                                        {/* //https://www.dropbox.com/s/67gv84terexddyg/MANUAL_PERFIL_DE_PUESTOS.pdf?dl=0 */}
                                        <a href="https://drive.google.com/file/d/17phYGnxJVEqcrCvU58VjmPR3d6eaAaCz/view?usp=sharing" target='_blank'>

                                            <FontAwesomeIcon className='fa-2x' icon={['far', 'file-pdf']}></FontAwesomeIcon>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manual Procesos académicos</td>
                                    <td className='text-center'>2021</td>
                                    <td className='text-center'>
                                        <a href='https://drive.google.com/file/d/1bvOQ3LZEH-b8FvDlUvSxCRbmCIQfHD-j/view?usp=sharing' target='_blank'>

                                            <FontAwesomeIcon className='fa-2x' icon={['far', 'file-pdf']}></FontAwesomeIcon>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Plan anual de trabajo</td>
                                    <td className='text-center'>2021</td>
                                    <td className='text-center'>
                                        <a href='https://drive.google.com/file/d/12adgYd4ZFnvjNaGpogVlywpZitZ6go7N/view?usp=sharing' target='_blank'>

                                            <FontAwesomeIcon className='fa-2x' icon={['far', 'file-pdf']}></FontAwesomeIcon>
                                        </a></td>
                                </tr>
                                <tr>
                                    <td>Proyecto educativo institucional</td>
                                    <td className='text-center'>2021</td>
                                    <td className='text-center'>
                                        <a href='https://drive.google.com/file/d/1AHOkmPgUETUyqCdDpdRSWMrjvIMioUs6/view?usp=sharing' target='_blank'>

                                            <FontAwesomeIcon className='fa-2x' icon={['far', 'file-pdf']}></FontAwesomeIcon>
                                        </a></td>
                                </tr>
                                <tr>
                                    <td>Reglamento interno</td>
                                    <td className='text-center'>2021</td>
                                    <td className='text-center'>
                                        <a href='https://drive.google.com/file/d/1IhwVEIaBBwNi5JD4VDSdm9YX01Z-Ac3-/view?usp=sharing' target='_blank'>

                                            <FontAwesomeIcon className='fa-2x' icon={['far', 'file-pdf']}></FontAwesomeIcon>
                                        </a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <Aliados />
            </div>
        </Layout>

    )
}