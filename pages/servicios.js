import Layout from '../components/layout'

import Image from 'next/image'

import styles from './servicios.module.scss'

export default function Servicios() {
  return (
    <Layout
      title='Servicios  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de los servicios de la institucion, misio, vision'
    >
      <div className={`${styles.wrapperServ} container`}>
        <h2 className='mt-5 text-center'>Formación Continua</h2>

        <div className='row justify-content-center my-5'>
          <div className='col-9'>
            <div className="d-flex align-items-start">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Cursos de Capacitación Semipresenciales y Virtuales</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Asesoría Gratuita en Contabilidad</button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Campaña de Salud Gratuita</button>

              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                  at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                  at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                  at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-3'>
            <h4>Recursos</h4>
          </div>
          <div className='col-9'>
            <div className={styles.lineaSeparador}></div>
          </div>
        </div>

        <div className='row justify-content-center my-5'>
          <div className='col-4 text-center'>
            <Image src='/img/icon-biblioteca.png' width='150' height='150' />
            <p>Biblioteca Virtual</p>
          </div>
          <div className='col-4 text-center'>
            <Image src='/img/icon-lupa.png' width='150' height='150' />
            <p>Bolsa de trabajo</p>
          </div>
          <div className='col-4 text-center'>
            <Image src='/img/icon-carpeta.png' width='150' height='150' />
            <p>Mesa de partes</p>
          </div>
          <div className='col-4 text-center'>
            <Image src='/img/icon-libro.png' width='150' height='150' />
            <p>Libro de reclamaciones</p>
          </div>
          <div className='col-4 text-center'>
            <Image src='/img/icon-graduacion.png' width='150' height='150' />
            <p>Campus Virtual</p>
          </div>
        </div>

      </div>
    </Layout>

  )
}