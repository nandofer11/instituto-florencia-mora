import Layout from '../../components/layout'
import Aliados from '../../components/aliados'

import Image from 'next/image'
import OwnImage from '../../components/Image'

import styles from './resena.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ReseñaHistorica() {
  return (
    <Layout
      title='Reseña Histórica  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de la reseña historica de la Institución'
    >
      <div className='container'>
        <div className='row my-5'>
          <div className={`${styles.wrapperReseñaHistorica} col-12 col-md-7 `}>
            <h2 className='text-center mb-3'>Reseña Histórica</h2>
            <p>
              Fundado el 10 de noviembre 1988, se crea por R.M. Nro. 967-88-ED, teniendo como promotores de las gestiones, a la comunidad florenciana organizada dirigida por sus autoridades distritales y con el decidido apoyo del diputado Dr. Raúl Lozano Ibáñez. En estas gestiones tiene un rol protagónico la Municipalidad Distrital de Florencia de Mora, bajo el liderazgo de su alcalde Sr. Manuel Cipriano Rafael y del Lic. Ed. William Quiñones Vásquez. La Municipalidad Distrital de Florencia de Mora se compromete a proporcionar la infraestructura física, el equipamiento y el mobiliario; funcionando en la 1ra planta del local municipal desde el mes de marzo del año 1989 y posteriormente en la 2da y 3ra planta de dicho local hasta el mes de agosto del año 1999; trasladándose al local que ocupa actualmente, el mismo que fue construido por INFES entre los años 1998 y 1999, iniciando las gestiones el Lic. Ed. Félix Rodríguez Vera, desde el año 1998 y culminando bajo la gestión de la Mg. Carmen Elena Carbonell García, directora nombrada, en el año 1998.
            </p>
            <p>
              El Instituto de Educación Superior Tecnológico Público “Florencia de Mora¨ inicia sus actividades en el año de 1989 con la carrera profesional de Construcción Civil. Autorizada con la R.D.R. Nro. 002424 del 29 de agosto de 1989; se le asigna las plazas de un (01) Director, un (01) Jefe de Departamento y dos (02) docentes estables.
            </p>
            <p>
              Con R.D. Nro. 115-90-ED del 19 de enero de 1990, se autoriza la ampliación con las carreras profesionales de Enfermería Técnica y Contabilidad. Con R.D.R. Nro. 02497 del 18 de octubre de 1990 se asignan plazas de incremento en el I.E.S.T.P. ¨Florencia de Mora¨ con vigencia el 01 de abril de 1990, con dos (02) Jefes de Departamento y cinco (05) docentes estables. Por R.D.R. Nro. 01298 desde el 31 de mayo de 1994 se aprueba el Organigrama Estructural y el Cuadro de Asignación de Personal (CAP) del I.E.S.T.P. ¨Florencia de Mora¨ en cumplimiento a lo dispuesto por el D.S. Nro. 041-93-PC quedando el CAP (Cuadro Analítico de Personal) de la siguiente manera: (01) director, (01) Jefe de Departamento, (03) docentes estables, 01 Oficinista y 01 Trabajador de Servicios. Con R.M. Nro. 0808-94-ED del 07 de octubre de 1994 se renueva la autorización de funcionamiento con las carreras profesionales oficialmente autorizados por el Ministerio de Educación hasta la fecha. Desde el año de su creación (1988) y funcionamiento (1989) los directores que dirigieron la institución en calidad de encargados fueron:
            </p>
          </div>
          <div className='col-12 col-md-5 align-self-center'>
            <OwnImage src="/img/instituto.jpeg" layout="fill" width="400px"></OwnImage>
            <OwnImage src="/img/instituto2.jpeg" layout="fill" width="400px"></OwnImage>
          </div>
        </div>
        <div>
          <div className="row mt-4">

            <div className={styles.timeline}>
              <div className={`${styles.container_timeline} ${styles.left}`}>
                <div className={`${styles.date}`}>1989</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Ing. José Yengle Isla.</h2>
                  
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.right}`}>
                <div className={`${styles.date}`}>1990</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Profesor Walter Minner Castro Gómez</h2>
                  <h2>Profesor Roberto Huamanchumo Arroyo</h2>
                  <h2>Profesor Luis Estuardo Pozo Ríos</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.left}`}>
                <div className={`${styles.date}`}>93-96</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Lic. Ed. Félix Rodríguez Vera</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.right}`}>
                <div className={`${styles.date}`}>1997</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>CPC Luciano Aredo Ñique</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.left}`}>
                <div className={`${styles.date}`}>1998</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Profesora Carmen Carbonell García</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.right}`}>
                <div className={`${styles.date}`}>2008</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Eco. Gregorio H. Lujan Burgos</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.left}`}>
                <div className={`${styles.date}`}>2010</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Ms CPC Marina Venegas Medina</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.right}`}>
                <div className={`${styles.date}`}>2016</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Lic. Enf. Iris A. Gutiérrez Rodríguez</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.left}`}>
                <div className={`${styles.date}`}>2017</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Mg. Lic. Enf. Maribel Yesenia Ibañez Escobedo</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.right}`}>
                <div className={`${styles.date}`}>2018</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Mg. Lic. Enf. Mercedes Edita Robles León</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.left}`}>
                <div className={`${styles.date}`}>2019</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Dra. Obst. Elsi Evelin Vásquez Alvarez</h2>
                </div>
              </div>
              <div className={`${styles.container_timeline} ${styles.right}`}>
                <div className={`${styles.date}`}>2021</div>
                <i className={`${styles.icon}`}></i>
                <div className={`${styles.content}`}>
                  <h2>Mg. Lic. Enf. Maribel Yesenia Ibañez Escobedo</h2>
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