import Layout from '../components/layout'
import Aliados from '../components/aliados'


import styles from './politicas-institucionales.module.scss'

import OwnImage from '../components/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PoliticasInstitucionales() {
    return (
        <Layout
            title='Politicas Institucionales  | I.E.S.T.P. Florencia de Mora'
            description='Descripción sobre el personal directivo de la Institución'
        >
            <div className={`${styles.wrapperBannerPoliticas} container-fluid px-0`}>
                <div className='container'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='me-5'>
                            <OwnImage src="/img/callcenter.png" layout="fill" width="200px"></OwnImage>
                        </div>
                        <div>
                            <h1>POLITICAS INSTITUCIONALES</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.wrapperPoliticas} container`}>
                <div className='row justify-content-center my-5'>
                    <div className='col-8'>
                        <p>
                            <span className='fw-bolder'>POLÍTICA 1: MOTIVACIÓN, ESTIMULACIÓN LABORAL Y COMPENSACIÓN</span> <br/>
                            Institucionalizar un programa de motivación y estimulación al trabajador con el establecimiento de estrategias de compensación para cautivar el potencial humano en el proceso la máxima dirección del Instituto, generando satisfacción laboral, incrementando su productividad y retenerlo a través de su apoyo con diversas actividades propias de su CPT en temas de la Calidad, valorando el puesto de trabajo como herramienta objetiva, así como ser un medio de integración organizativa, fijando indicadores para evaluar el aporte de cada trabajador y de procedimientos que eviten criterios subjetivos y voluntarismos que conduzcan a falsas apreciaciones, respetando la normatividad vigente.
                        </p>
                        <p>
                            <span className='fw-bolder'>POLÍTICA 2: FIDELIZACIÓN DEL ESTUDIANTE</span><br/>
                            Proponer procesos de articulación que permitan un alto grado de satisfacción del estudiante en las ocho (8) Carreras Profesionales Técnicas que están adecuadas al nuevo Diseño Curricular Básico Nacional.
                        </p>
                        <p>
                            <span className='fw-bolder'>POLÍTICA 3: DE LA ACREDITACIÓN</span><br/>
                            Es propósito fundamental desarrollar procesos de evaluación (autoevaluación, coevaluación, heteroevaluación) que conduzcan al mejoramiento de la calidad de la educación técnica y al proceso de acreditación de las ocho (8) Carreras Profesionales Técnicas y de la institución.
                        </p>
                        <p>
                            <span className='fw-bolder'>POLÍTICA 4: DE LA ORIENTACIÓN VOCACIONAL Y ADMISIÓN</span><br/>
                            Promover y perfeccionar el programa de orientación vocacional tecnológica para el proceso de admisión estudiantil, preparación y selección, en cada proceso a partir de los lineamientos propuestos por la Dirección General de Educación Superior y Técnico-Profesional, y de mecanismos eficientes que permitan una evaluación continua de las características de los estudiantes postulantes a través del Centro de Nivelación (CEPUNE) con el otorgamiento de ingreso directo a los cinco (5) primeros lugares y su correspondencia con el perfil de ingreso que exige en cada programa de estudios Técnica.
                        </p>
                        <p>
                            <span className='fw-bolder'>POLÍTICA 5: DE LA CAPACITACIÓN DEL PERSONA</span><br/>
                            Demostración en la formación de personas íntegras, exitosas, comprometidas consigo mismas y con la sociedad global a la que pertenecen, creativas, críticas, proactivas y con una visión prospectiva; que actúen como agentes de cambio en una perspectiva de desarrollo, sustentabilidad y bienestar social; competentes y satisfechas para alcanzar sus objetivos y metas en un proyecto de vida, que sean reconocidas y demandadas preferentemente en los ámbitos laboral, educativo y social.
                        </p>
                        <p>
                            <span className='fw-bolder'>POLÍTICA 6: DE LA EVALUACIÓN</span><br/>
                            Se pretende cualificar la labor del personal docente, técnico y administrativo mediante la cualificación, formación, actualización, perfeccionamiento, especialización, investigación e innovación y evaluación profesional para satisfacer el servicio de los estudiantes y a la comunidad en general.
                        </p>
                        <p>
                            <span className='fw-bolder'>POLÍTICA 7: DE LA CERTIFICACIÓN Y TITULACIÓN</span><br/>
                            Garantizar un sistema de evaluación integral que permita diagnosticar, controlar y asegurar la calidad de los aprendizajes en los estudiantes de cada programa de estudios Técnica.
                        </p>
                    </div>
                </div>

                <Aliados/>
            </div>
        </Layout>

    )
}