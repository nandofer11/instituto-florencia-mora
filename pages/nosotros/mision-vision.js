import Layout from '../../components/layout'
import Aliados from '../../components/aliados'

import Image from 'next/image'

import styles from './mision-vision.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MisionVision() {
  return (
    <Layout
      title='Misión y Visión  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de la reseña historica de la Institución'
    >
      {/* <h2 className='text-center'>Misión Y Visión</h2> */}
      <div className={`${styles.wrapperMision} container-fluid`}>
        <div className='container'>
          <div className='row'>
          <div className='col-12 col-md-6'>
              <Image src='/img/img_mision.png' width='532' height='369' />
            </div>
            <div className='col-12 col-md-6 align-self-center'>
              <h2>Misión</h2>
              <p className='pe-5'>Somos un Instituto que forma profesionales técnicos en Contabilidad y 
              Enfermería Técnica; líderes, competitivos basados en conocimientos científicos, tecnológicos 
              y humanísticos, con conciencia ambiental y práctica de valores; contribuyendo al desarrollo 
              socio económico de la región.</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className={`${styles.wrapperVision} container-fluid`}>
        <div className='container'>
          <div className='row'>
          <div className='col-12 col-md-6 align-self-center ps-5'>
              <h2>Visión</h2>
              <p className=''>Al 2025, ser un Instituto licenciado, con profesionales competitivos basados 
              en sólidos valores; fomentando la investigación e innovación tecnológica, el emprendimiento y 
              preservando el medio ambiente para el desarrollo local y regional, con responsabilidad social.</p>
            </div>
            <div className='col-12 col-md-6'>
            <Image src='/img/img_vision.png' width='536' height='402' />
            </div>
            

          </div>
        </div>
      </div>
      <div className='container'>
          <Aliados/>
      </div>
    </Layout>

  )
}