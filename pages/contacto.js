import Layout from '../components/layout'

import Aliados from '../components/aliados'

import Image from 'next/image'
import OwnImage from '../components/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './contacto.module.scss'

export default function Contacto() {
  return (
    <Layout
      title='Contacto  | I.E.S.T.P. Florencia de Mora'
      description='Formas de contacto de la institucion, misio, vision'
    >

      <div className={`${styles.wrapperBannerContacto} container-fluid px-0`}>
        <div className='container'>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='me-5'>
              <OwnImage src="/img/files.png" layout="fill" width="120px"></OwnImage>
            </div>
            <div>
              <h1>CONTÁCTANOS</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapperContacto} container my-5`}>
        <div className='row'>
          <div className='col text-center'>
            <Image src='/img/noticia1.png' width='400' height='300'/>
          </div>
          <div className='row'>

            <h4 className='mb-5 text-center'>Ponemos a tu servicio los siguientes números de contacto.</h4>

            <div className='col-12 col-md-3 mb-5'>
              
              <div>
                <p className='fw-bolder mb-0'>Secretaría General Mesa de partes</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Victor M. Morillo Tapia</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 970391029</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> mesadepartesiestpfm@gmail.com</p>
              </div>
            </div>
            <div className='col-12 col-md-3 mb-5'>
              <div>
                <p className='fw-bolder mb-0'>Secretaría Académica</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Elsi E. Vásquez Álvarez</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 981956901</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> elsivasquez@hotmail.com</p>
              </div>
            </div>
            {/* <div className='col-3 mb-5'>
              <div>
                <p className='fw-bolder mb-0'>Jefe Unidad Académica</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon>Mercedes E. Robles León</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 977385076</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> editarl@hotmail.com</p>
              </div>
            </div> */}
            <div className='col-12 col-md-3 mb-5'>
              <div>
                <p className='fw-bolder mb-0'>Coordinacion de Área de Enf. Téc.</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Iris A. Gutierrez Rodríguez</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 948019238</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> iris_gr@hotmail.com</p>
              </div>
            </div>
            <div className='col-12 col-md-3 mb-5'>
              <div>
                <p className='fw-bolder mb-0'>Coordinacion de Área de Contabilidad</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Miguel Gutierrez Muñoz</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 942884208</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> miguel_gutierrez_m@hotmail.com</p>
              </div>
            </div>
            <div className='col-12 col-md-3 mb-5'>
              <div>
                <p className='fw-bolder mb-0'>Bienestar y Empleabilidad</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Angélica Morín Rodríguez</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 925828027</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> angelitamorinr@gmail.com</p>
              </div>
            </div>
            <div className='col-12 col-md-3 mb-5'>
              <div>
                <p className='fw-bolder mb-0'>Formación contínua</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Elva Rodríguez Avila</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 948128339</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> glorita.laredo@gmail.com</p>
              </div>
            </div>
            <div className='col-12 col-md-3 mb-5'>
              <div>
                <p className='fw-bolder mb-0'>Área de calidad</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Blanca Guzmán Arangurí</p>
                <p className='mb-0'><FontAwesomeIcon icon={['fab', 'whatsapp']}></FontAwesomeIcon> 99440110</p>
                <p className='mb-0'><FontAwesomeIcon icon={['far', 'envelope-open']}></FontAwesomeIcon> blanca_lyly@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Aliados/>
      </div>
    </Layout>

  )
}