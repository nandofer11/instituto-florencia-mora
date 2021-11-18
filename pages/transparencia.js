import Layout from '../components/layout'
import Aliados from '../components/aliados'


import OwnImage from '../components/Image'

import Image from 'next/image'

import styles from './transparencia.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Transparencia() {
  return (
    <Layout
      title='Transparencia  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de los servicios de la institucion, misio, vision'
    >
      <div className={`${styles.wrapperBannerTransparencia} container-fluid px-0`}>
        <div className='container'>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='me-5'>
              <OwnImage src="/img/files.png" layout="fill" width="120px"></OwnImage>
            </div>
            <div>
              <h1>TRANSPARENCIA</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapperTransparencia} container`}>

        <p className='fs-4 text-center my-5'>Publicamos de forma permanente, actualizada y transparente la información de interés publico.</p>

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
                  <td>Informe económico</td>
                  <td className='text-center'>2021</td>
                  <td className='text-center'>
                    <a href='https://drive.google.com/file/d/1YfqA0Tatws27TP24oTD2B0pnavvHHcKO/view?usp=sharing' target='_blank'>

                      <FontAwesomeIcon className='fa-2x' icon={['far', 'file-pdf']}></FontAwesomeIcon>
                    </a></td>
                </tr>
                <tr>
                  <td>Informe económico</td>
                  <td className='text-center'>2020</td>
                  <td className='text-center'>
                    <a href='https://drive.google.com/file/d/1rC9iYyb_YAQD1lHhfjxMX4Xt0h_L1ser/view?usp=sharing' target='_blank'>

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