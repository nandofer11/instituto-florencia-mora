import Layout from '../../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Aliados from '../../components/aliados'

import Image from 'next/image'
import OwnImage from '../../components/Image'

import styles from './bolsa-trabajo.module.scss'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Admision() {
  return (
    <Layout
      title='Bolsa de Trabajo  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de bolsa de trabajo'
    >
      <div className={`${styles.wrapperBannerBolsa} container-fluid px-0`}>
        <div className='container'>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='me-5'>
              <OwnImage src="/img/icon-bolsa.png" layout="fill" width="130px"></OwnImage>
            </div>
            <div><h1>BOLSA DE TRABAJO</h1>

            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapperBolsa} container`}>
        <div className='row my-5 justify-content-center'>
          <div className='col-8'>
            <p className=''>
              Buscamos integrar a la instituto con el mundo laboral. Brindamos a nuestros alumnos y
              egresados un canal exclusivo para encontrar ofertas de empleo y los asesoramos para
              sobresalir en los procesos de selección más difíciles. Alineamos la preparación académica
              con el desempeño laboral para formar profesionales altamente competitivos desde las aulas
              de clase.

            </p>
          </div>
        </div>
        <div className='row justify-content-center my-5'>
          <h5 className='text-center mb-5'>SERVICIOS</h5>
          <div className='col-4 '>
            <OwnImage src="/img/callcenter.png" layout="fill" width="200px"></OwnImage>
            <h5 className='mt-4'>ALUMNOS Y EGRESADOS</h5>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Convocatorias Laborales
              </li>
              <li className='nav-item'>
                <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Cartas de Presentación de Prácticas
              </li>
            </ul>
          </div>
          <div className='col-4 '>
            <OwnImage src="/img/callcenter.png" layout="fill" width="200px"></OwnImage>
            <h5 className=' mt-4'>EMPRESAS</h5>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Convocatorias Laborales
              </li>
              <li className='nav-item'>
                <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Charlas, talleres y procesos de selección de personal
              </li>
              <li className='nav-item'>
                <FontAwesomeIcon className='ms-4' icon={'check'}></FontAwesomeIcon> Convenios interinstitucionales
              </li>
            </ul>
          </div>
        </div>
        <div className={`row justify-content-center`}>
          <div className={`${styles.wrapperBuzonBolsa} col-6`}>
            <h5 className=''>BUZÓN BOLSA DE TRABAJO</h5>
            <p>Agradeceré puedas comunicarte con nosotros al correo de
              <span className='fw-bolder'> bolsadetrabajo@iestpfm.edu.pe </span>
              con la finalidad de brindarte apoyo y orientación en el inicio del desarrollo de sus
              prácticas.</p>
          </div>

        </div>

        <Aliados />
      </div>
    </Layout>

  )
}