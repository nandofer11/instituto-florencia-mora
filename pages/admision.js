import Layout from '../components/layout'
import Aliados from '../components/aliados'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from 'next/image'
import OwnImage from '../components/Image'

import styles from './admision.module.scss'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Admision() {
  return (
    <Layout
      title='Admisión  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de la admision en la institucion, misio, vision'
    >
      <div className={`${styles.wrapperBannerAdmi} container-fluid px-0`}>
        <div className='container'>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='me-5'>
              <OwnImage src="/img/callcenter.png" layout="fill" width="200px"></OwnImage>
            </div>
            <div><h1>ADMISIÓN 2022</h1>

            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={`${styles.wrapperDate} row align-items-center`}>
          <div className='col'>
            <p>
              <span className='fw-bold'>Admisión</span> <br />
              <span className={styles.date}>31</span><br />
              marzo
            </p>
          </div> |
          <div className='col'>
            <p>
              <span className='fw-bold'>Inicio de clase</span> <br />
              <span className={styles.date}>1</span> <br />
              Abril
            </p>
          </div> |
          <div className='col'>
            <p>
              <span className='fw-bold'>Cuentas de pago</span> <br />
              Banco de la Nación</p>
          </div>
        </div>

        <div className='row my-5 justify-content-center'>
          <div className={`${styles.wrapperAdmi} col-12 col-md-5`}>
            <h2 className='mb-4 text-center'>Modalidades de Admisión</h2>
            <p>
              <span className='fw-bold'>Ordinaria:</span> <br />
              Se realiza una vez al año a través
              de una evaluación, considerando las condiciones
              de calidad para cubrir el número de
              vacantes de acuerdo al orden de mérito.
            </p>
            <p>
              <span className='fw-bold'>Por Exoneración:</span> <br />
              Contempla la admisión
              de deportistas calificados,estudiantes talentosos y
              aquellos que están cumpliendo servicio militar voluntario.
            </p>
            <a className='btn btn-danger' href='https://drive.google.com/file/d/1-Hh9Cofv63Sd3WO2wnn-xduQdqEkOz70/view?usp=sharing' target='_blank'>
            <FontAwesomeIcon className='' icon={['far', 'file-pdf']}></FontAwesomeIcon> Descargar prospecto</a>
          </div>
          <div className={`${styles.wrapperRequisitos} col-12 col-md-5`}>
            <h2 className='mb-4 text-center'>Requisitos</h2>
            <p className='ms-5'>
              1) Certificado de estudios de 1° al 5° de secundaria. <br />

              2) Copia de DNI.<br />

              3) Partida de nacimiento.<br />

              4) Fotos tamaño carnet.<br />

              5) Voucher de pago por derecho de inscripción.</p>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapperProtocolos} container-fluid mt-5`}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-5'>
              <h2 className='text-center mb-4'>Protocolo COVID-19</h2>
              <p>
                - Deberá usar mascarilla y protecto facil dentro de nuestras instalaciones. </p>

              <p>- Mantenga una distancia de 6 pies dentro del instituto. Recuerde que algunas personas que no tienen síntomas pueden propagar el virus.</p>

              <p>- Lávese las manos con frecuencia con agua y jabón por al menos 20 segundos, especialmente después de haber tocado objetos, o después de sonarse la nariz, toser o estornudar.</p>

              <p>- Lleve conigo sus propios materiales, por ningún motivo debe prestar cosas a los demás estudiantes.</p>
              <a className='btn btn-danger' href='https://drive.google.com/file/d/1OMX1nkODAg6y7MSZm8jumek8quC9F3jV/view?usp=sharing' target='_blank'>
                <FontAwesomeIcon className='' icon={['far', 'file-pdf']}></FontAwesomeIcon> Descargar guia completa</a>
            </div>
            <div className='col-12 col-md-5'>
              <OwnImage src="/img/protocolo.jpg" layout="fill" width="300px"></OwnImage>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <Aliados />
      </div>

    </Layout>

  )
}