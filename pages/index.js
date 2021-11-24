import Layout from '../components/layout'
import Aliados from '../components/aliados'

import styles from './index.module.scss'

import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from 'next/image'
import OwnImage from '../components/Image'

import React from 'react'

export default function Home() {

  const [noticias, setNoticias] = React.useState([]);

  React.useEffect(() => {
    const fetchNoticias = async () => {
      const res = await fetch('http://localhost:1337/noticias');
      const newNoticias = await res.json();
      setNoticias(newNoticias);
    };

    fetchNoticias();
  }, []);

  return (
    <Layout>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="/img/slider1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/img/slider2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/slider3.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className={`${styles.wrapperCarreras} container-fluid pt-2`}>
        <div className='container text-center py-5'>
          <h2>NUESTRAS CARRERAS</h2>
          <p className=''>Somos una Institución comprometida con el desarrollo de nuestra<br />
            comunidad Florenciana. </p>
          <div className='row mt-5'>
            <div className='col-12 col-md-6'>
              <Image src='/img/contabilidad.png' width='300' height='300' /> <br />
              <Link href='/programas/contabilidad'>
                <a className='my-4 btn btn-danger'>
                  Contabilidad
                </a>
              </Link>
            </div>
            <div className='col-12 col-md-6'>
              <Image src='/img/enfermeria.png' width='300' height='300' /> <br />
              <Link href='/programas/enfermeria'>
                <a className='my-4 btn btn-danger'>
                  Enfermeria
                </a>
              </Link>

            </div>
          </div>


        </div>
      </div>

      <div className={`${styles.wrapperVentajas} container-fluid`}>
        <div className='container text-center'>
          <h2 className=''>ALGUNAS DE NUESTRAS VENTAJAS</h2>
          <p className='mb-5 fs-5'>Buscamos hacer la diferencia!</p>
          <div className='row my-3 row-cols-1 row-cols-sm-2 row-cols-md-3'>
            <div className={`col-12 col-md-3`}>
              <div className={`${styles.iconVentaja} mb-4`}>
                <FontAwesomeIcon className='fa-4x mb-2' icon={'users'}></FontAwesomeIcon>
                <h4 className=''>Plana docente especializada</h4>
              </div>

            </div>
            <div className={`col-12 col-md-3`}>
              <div className={`${styles.iconVentaja} mb-4`}>
                <FontAwesomeIcon className='fa-4x mb-2' icon={['far', 'clock']}></FontAwesomeIcon>
                <h4 className=''>Horarios flexibles</h4>
              </div>

            </div>
            <div className={`col-12 col-md-3`}>
              <div className={`${styles.iconVentaja} mb-4`}>
                <FontAwesomeIcon className='fa-4x ms-2' icon={'user-graduate'}></FontAwesomeIcon>
                <h4 className=''>Titulo a nombre de la Nación</h4>
              </div>

            </div>
            <div className={`col-12 col-md-3`}>
              <div className={`${styles.iconVentaja}`}>
                <FontAwesomeIcon className='fa-4x mb-2' icon={'check'}></FontAwesomeIcon>
                <h4>Educación de calidad</h4>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapperFrase} container-fluid`}>
        <div className='container'>
          <h2 className='mb-5'>“La educación es el arma más poderosa que puedes usar <br />
            para cambiar el mundo” </h2>
          <figcaption className="fs-5 blockquote-footer mb-0">
            Nelson Mandela
          </figcaption>
        </div>
      </div>

      <div className={`${styles.wrapperEgresados} container-fluid px-0`}>
        <div className='container text-center'>
          <h2 className='mb-4'>NUESTROS EGRESADOS</h2>
          <p className='mb-3 fs-5'>8 de cada 10 de nuestros egresados consiguieron mejoras profesionales<br />
            y ascensos laborales. </p>
        </div>
        <section className="pt-5 pb-5" >
          <div className="container">
            <div className="row justify-content-center align-items-stretch">

              <div className='col'>
                <div className={`${styles.cardEgresado} card card-body`}>
                  <div className="row">
                    <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                      <img alt="image" className="img-fluid rounded-circle" src="/img/egresado1.png" />
                    </div>
                    <div className="col-md-8 mt-4 mt-md-0">
                      <p className="text-h3">
                        "La formación que recibí en mi etapa de estudiante del I.E.S.T.P “FLORENCIA DE MORA”,
                        permitió que desarrolle todas mis capacidades como contador, y pude
                        alcanzar el nombramiento en el proceso del año 2015, en una Institución Educativa."
                      </p>
                      <p className="text-h3 mt-4 mt-xl-5"><strong>Roberto Sánchez</strong>
                      </p>
                      <p><em>Contabilidad</em></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className={`${styles.cardEgresado} card card-body`}>
                  <div className="row">
                    <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                      <img alt="image" className="img-fluid rounded-circle" src="/img/egresado2.png" />
                    </div>
                    <div className="col-md-8 mt-4 mt-md-0">
                      <p className="text-h3">
                        "La excelente preparación que recibí en la I.E.S.T.P “FLORENCIA DE MORA”,
                        me ha dado la confianza y seguridad para asumir nuevos retos. Hoy me encuentro
                        trabajando en una de las más
                        importantes Instituciones educativas de nuestra Región."
                      </p>
                      <p className="text-h3 mt-4 mt-xl-5"><strong>Paula López</strong>
                      </p>
                      <p><em>Contabilidad</em></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className={`${styles.cardEgresado} card card-body`}>
                  <div className="row">
                    <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                      <img alt="image" className="img-fluid rounded-circle" src="/img/egresado3.png" />
                    </div>
                    <div className="col-md-8 mt-4 mt-md-0">
                      <p className="text-h3">
                        "Mi nombre es María, soy Egresada de la especialidad de Enfermería del Instituto de
                        Educación Superior Tecnológico Público Florencia de Mora, tras años
                        de buena formación en esta excelente institución pude lograr nombrarme como
                        Enfermera."
                      </p>
                      <p className="text-h3 mt-4 mt-xl-5"><strong>María Gómez</strong>
                      </p>
                      <p><em>Enfermería</em></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <Aliados />

      <div className={`${styles.wrapperNoticias} container-fluid`}>

        

        <div className='container text-center'>
        <h2 className=''>NOTICIAS</h2>
          <p className='pb-5 fs-5'>Conoce las diversas actividades que se desarrollan en nuestra institución educativa.</p>

          <div className='row d-flex'>
            {noticias.map(noticia => {
              return (

                <div className='col '>
                  <Link href={`/noticias/[id]`} as={`/noticias/${noticia.id}`} key={noticia.id}>
                    <a>
                      <OwnImage src="/img/nt1.jpeg" layout="fill" width="252px"></OwnImage>
                      <h5 className='mt-3'>{noticia.titulo}</h5>
                      <p>{noticia.contenido.slice(0, 200) + ' ...'}</p>
                    </a>
                  </Link>
                </div>


              )
            })}
          </div>
        </div>





        {/* <div className='container  text-center'>
         
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
            <div className='col'>
              <OwnImage src="/img/nt1.jpeg" layout="fill" width="352px"></OwnImage>
              <h5 className='mt-4'>Ceremonia de Titulación, ex-alumnas de Enfermería Técnica y Contabilidad</h5>
              <p>Fecha: 03/09/2021</p>
              <p>Feliz día a todas y todos los técnicos profesionales egresados de nuestra prestigiosa
                casa de estudios y a nuestros apreciados estudiantes de este noble programa de estudios.</p>
            </div>
            <div className='col'>
              <OwnImage src="/img/nt2.jpg" layout="fill" width="352px"></OwnImage>
              <h5 className='mt-4'>ISTFM pide apoyo a colegios de Ingenieros y Arquitectos</h5>
              <p>Fecha: 13/09/2021</p>
              <p>Para elaborar expediente técnico de proyecto de inversión para mejorar su infraestructura
                y modernización a fin de lograr licenciamiento. Ante el casi nulo interés del alcalde</p>
            </div>
            <div className='col'>
              <OwnImage src="/img/nt3.png" layout="fill" width="352px"></OwnImage>
              <h5 className='mt-4'>Feliz día técnicos de Enfermería <br /> del IESTP</h5>
              <p>Fecha: 12/08/2021</p>
              <p>Feliz día a todas y todos los técnicos profesionales egresados de nuestra prestigiosa
                casa de estudios y a nuestros apreciados estudiantes de este noble programa de estudios.</p>
            </div>
          </div>
        </div> */}


      </div>
      <div className={`${styles.wrapperMap} container-fluid`}>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2'>
          <div className='col px-0'>
            <div className={styles.mapResponsive}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.182446132134!2d-79.02666428481159!3d-8.082867883048573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3df9e8df007d%3A0xa3ad6ab8c1aeaf6e!2sInstituto%20Superior%20Tecnologico%20Superior%20Florencia%20de%20mora!5e0!3m2!1ses!2spe!4v1633315757479!5m2!1ses!2spe"

                // style="border:0;"
                // allowfullscreen=""
                loading="lazy">

              </iframe>
            </div>
          </div>
          <div className='col align-self-center'>
            <div className='ms-5'>
              <h2 className='mb-5'>Visítanos en</h2>
              <p className="fw-bold fst-italic">Dirección:</p>
              <p>José de la Torre Ugarte S/N (Plaza de Armas) <br />
                Florencia de Mora,Trujillo, Perú</p>
              <p className="fw-bold fst-italic">Contacto:</p>
              <p>942 884 208 | 945 256 268</p>
              <p className="fw-bold fst-italic">Horario de atención:</p>
              <p>Lun - Sáb : 8:00am a 5:00pm</p>
            </div>
          </div>
        </div>
      </div>

    </Layout>

  )
}


