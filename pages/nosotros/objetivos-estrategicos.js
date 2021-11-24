import Layout from '../../components/layout'
import Aliados from '../../components/aliados'

// import Image from 'next/image'
import OwnImage from '../../components/Image'

import styles from './objetivos.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ObjetivosEstrategicos() {
  return (
    <Layout
      title='Objetivos Estratégicos  | I.E.S.T.P. Florencia de Mora'
      description='Descripn acerca de la reseña historica de la Institución'
    >
      <div className={`${styles.wrapperObjetivos} container my-5`} >

        <h2 className='text-center'>OBJETIVOS ESTRATEGICOS</h2>
        <p className='text-center mb-5'>Buscamos hacer la diferencia!</p>

        <table class="table ">
          <thead className='text-center'>
            <tr>

              <th scope="col">CONDICIÓNES BASICA DE CALIDAD</th>
              <th scope="col">OBJETIVOS ESTRATÉGICOS</th>
              <th scope="col">ACCIONES ESTRATEGICAS / OBJETIVOS ESPECIFICOS</th>
            </tr>
          </thead>
          <tbody>
            <tr >

              <td className='fw-bold'>1. GESTIÓN INSTITUCIONAL</td>
              <td>OE1: Conseguir el liderazgo de nuestra institución a nivel local y regional vinculado con el sector productivo y de servicio.</td>
              <td><p>
                1. Actualizar e implementar los diversos documentos de gestión para el logro de la visión, misión, valores y objetivos estratégicos. <br />

                2. Impulsar un buen clima laboral que fomente el buen trabajo en equipo y se logre los objetivos institucionales.<br />

                3. Modernizar el sistema de información y comunicación del I.E.S.T.P. “Florencia de Mora”.<br />

                4. Desarrollar acciones de vinculación permanente con nuestros egresados para potenciar su desarrollo profesional.<br />

                5. Establecer alianzas estratégicas con empresas del sector productivo y servicio público y privado.
              </p></td>
            </tr>
            <tr>

              <td className='fw-bold'>2. GESTIÓN ACADÉMICA Y PROGRAMAS DE ESTUDIO PERTINENTES Y ALINEADOS A LAS NORMAS DEL MINEDU.</td>
              <td>OE5: Diseñar y ejecutar el Plan de autoevaluación que permita mejorar los sistemas de organización y evaluación para lograr la acreditación de los Programas de estudio que el IESTP “Florencia de Mora” oferta.</td>
              <td><p>
                1. Sensibilizar a la comunidad educativa, sobre la importancia de los procesos de autoevaluación en todos los niveles para la acreditación de las Programas de estudio, a través de jornadas de trabajo, reuniones por áreas académicas y dependencias administrativas en la elaboración del plan de mejoras institucional. <br />

                2. Implementar y aplicar procedimientos efectivos de evaluación de desempeño de los trabajadores de la Institución.<br />

                3. Sistematizar los diferentes procesos de Gestión y técnico pedagógicos y aplicar los correctivos necesarios requeridos para la autoevaluación y evaluación externa de las carreras profesionales con el fin de conseguir la acreditación.<br />

                4. Implementar acciones que conlleven al licenciamiento institucional según normatividad vigente.
              </p></td>
            </tr>
            <tr>

              <td className='fw-bold'>3. INFRAESTRUCTURA FÍSICA, EQUIPAMIENTO Y RECURSOS PARA EL APRENDIZAJE</td>
              <td>OE2: Ofrecer una formación profesional tecnológica de calidad acorde con los requerimientos del sector productivo y del desarrollo regional, incorporando programas Educativos innovadores y estrategias de lucha contra la pobreza y de mejoramiento de la calidad de vida., a fin de que permita al 80% de los egresados insertarse con éxito al mundo del trabajo.	</td>
              <td><p>
                1. Actualizar los planes curriculares de las Programas de estudio, para adecuarlos al Sistema Modular de Formación Profesional de Educación Superior Tecnológica.<br />

                2. Incentivar e impulsar la elaboración de proyectos de investigación y actividades productivas, promoviendo la proyección a la comunidad con participación de los estudiantes.<br />

                3. Implementar a los Programas de estudio con material bibliográfico e informáticos en relación con las exigencias competitivas que el mercado actual exige.<br />

                4. Introducir el uso racional de las nuevas tecnologías para apoyar la innovación y mejoramiento de los procesos de enseñanza-aprendizaje en el desarrollo de capacidades técnicas y profesionales.<br />

                5. Implementar el sistema de evaluación del estudiante con aplicación del nuevo DCB.<br />

                6. Promover el apoyo y la participación de las instituciones públicas, privadas y la comunidad en general en los programas de apoyo técnico-pedagógico, de capacitación y de producción y servicios.
              </p></td>
            </tr>

            <tr>

              <td className='fw-bold'>4. PERSONAL DIRECTIVO, JERÁRQUICO Y DOCENTE</td>
              <td>OE4: Mejorar de manera autónoma sus capacidades profesionales a través de la reflexión sistemática de su experiencia docente, participando en actividades formativas que garanticen su actualización profesional permanente y que evidencie una ética sostenible con los estudiantes y con el desarrollo sostenible del país.	</td>
              <td><p>
                1. Programar Cursos de Capacitación, especialización e innovación para docentes idóneos.<br />

                2. seleccionar e implementar programas y/o cursos de capacitación y actualización para el personal docente suficiente en los aspectos pedagógicos y tecnológicos direccionados con los recursos tecnológicos de actualidad.
              </p></td>
            </tr>

            <tr>

              <td className='fw-bold'>5. PREVISIÓN ECONÓMICA Y FINANCIERA</td>
              <td> OE3: Incrementar la capacidad financiera del IESTP “Florencia de Mora” mediante la Gestión de Proyectos institucionales y la realización de actividades productivas	</td>
              <td><p>
                1. Incrementar los ingresos por recursos propios.<br />

                2. Reestructuración administrativa y financiera del Instituto, elaborando los presupuestos en base a programas y actividades del IESTP “Florencia de Mora”.<br />

                3. Racionalizar los recursos humanos.<br />

                4. Aprovechando la capacidad instalada (laboratorio, tópico, centro de cómputo) y la experiencia de los docentes y alumnado, promover proyectos productivos para generar ingresos propios y mejorar la situación financiera institucional.
              </p></td>
            </tr>

          </tbody>
        </table>

        <div className='container'>

          <h2 className='text-center mt-5'>ORGANIGRAMA</h2>
          <OwnImage src="/img/organigrama.jpg" layout="fill" width="800px"></OwnImage>

        </div>



        <Aliados />
      </div>
    </Layout>

  )
}