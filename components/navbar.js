import styles from './navbar.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useRouter } from 'next/dist/client/router'


export default function Navbar() {

  const router = useRouter();

  return (
    <div className={`${styles.wrapperNav} container pt-2`}>
      <div className='row d-none d-sm-block'>

        <div className='col'>
          <div className=' d-flex justify-content-end'>
            <div className='mx-4'>
              <span className='fw-bolder fst-italic'>
                Mayor información:
              </span>
                <FontAwesomeIcon className='ms-2' icon={'phone-volume'}></FontAwesomeIcon> 044-537322
              <span>
                <FontAwesomeIcon className='ms-3' icon={'envelope'}></FontAwesomeIcon> mesadepartesiestpfm@gmail.com
              </span>
            </div>
            <div className={styles.redesSociales}>
              <span className='fw-bolder'>Síguenos:</span>
              <a href='https://www.facebook.com/IESTP.FlorenciaMora' target='_blank'>

                <FontAwesomeIcon className={`${styles.iconFb} mx-2 `} icon={['fab', 'facebook-square']}></FontAwesomeIcon>
              </a>
              <a href='https://www.facebook.com/IESTP.FlorenciaMora' target='_blank'>
              <FontAwesomeIcon className={`${styles.iconWsp} me-2`} icon={['fab', 'instagram']}></FontAwesomeIcon>
              </a>
              <a href='https://www.facebook.com/IESTP.FlorenciaMora' target='_blank'>
              <FontAwesomeIcon className={`${styles.iconWsp}`} icon={['fab', 'youtube']}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>

      </div>
      <nav className="navbar navbar-expand-lg navbar-light">

        <Link legacyBehavior href='/'>
          <a>
            <Image
              src='/img/logo.png' // Route of the image file
              height={95} // Desired size with correct aspect ratio
              width={95} // Desired size with correct aspect ratio
              alt="Logo Instituto Superior"
            />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link legacyBehavior href='/'>
                <a className={router.pathname == '/' ? 'nav-link active' : 'nav-link'} aria-current="page">Inicio</a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a className={`${router.pathname == '/nosotros/documentos-gestion' || router.pathname == '/nosotros/personal-directivo' || router.pathname == '/nosotros/resena-historica' || router.pathname == '/nosotros/mision-vision' || router.pathname == '/nosotros/objetivos-estrategicos' ? 'nav-link active' : 'nav-link'} nav-link dropdown-toggle`} href="#" id="navbarDropdownProgramas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nosotros
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link legacyBehavior href="/nosotros/personal-directivo">
                    <a className='dropdown-item'>Personal Directivo</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/nosotros/mision-vision">
                    <a className='dropdown-item'>Misión y Visión</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/nosotros/resena-historica">
                    <a className='dropdown-item'>Reseña Histórica</a>
                  </Link>
                </li>

                <li>
                  <Link legacyBehavior href="/nosotros/objetivos-estrategicos">
                    <a className='dropdown-item'>Objetivos Estratégicos</a>
                  </Link>
                </li>
                {/* <li>
                    <Link href="/nosotros/infraestructura">
                      <a class='dropdown-item'>Infraestructura</a>
                    </Link>
                  </li> */}
                <li>
                  <Link legacyBehavior href="/nosotros/documentos-gestion">
                    <a className='dropdown-item'>Documentos de Gestión</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className={`${router.pathname == '/programas/contabilidad' || router.pathname == '/programas/enfermeria' ? 'nav-link active' : 'nav-link'} nav-link dropdown-toggle`} href="#" id="navbarDropdownProgramas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Programas
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link legacyBehavior href="/programas/contabilidad">
                    <a className='dropdown-item'>Contabilidad</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/programas/enfermeria">
                    <a className='dropdown-item'>Enfermería</a>
                  </Link>
                </li>

              </ul>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href='/transparencia'>
                <a className={router.pathname == '/transparencia' ? 'nav-link active' : 'nav-link'} aria-disabled="true">Transparencia</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href='/tramites'>
                <a className={router.pathname == '/tramites' ? 'nav-link active' : 'nav-link'} aria-disabled="true">Trámites</a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a className={`${router.pathname == '/servicios/bolsa-trabajo' || router.pathname == '/servicios/formacion-continua' ? 'nav-link active' : 'nav-link'} nav-link dropdown-toggle`} href="#" id="navbarDropdownServicios" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link legacyBehavior href="/servicios/formacion-continua">
                    <a className="dropdown-item">Formación Continua</a>
                  </Link>
                </li>
                <li>

                  <a className="dropdown-item" href='https://www.alphaeditorialcloud.com/auth/login' target="_blank">Biblioteca Virtual</a>

                </li>
                {/* <li>
                  <Link href="/servicios/mesa-partes">
                    <a class="dropdown-item">Mesa de partes virtual</a>
                  </Link>
                </li> */}
                <li>
                  <Link legacyBehavior href="/servicios/bolsa-trabajo">
                    <a className="dropdown-item">Bolsa de Trabajo</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/servicios/libro-reclamaciones">
                    <a className="dropdown-item">Libro de reclamación</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/servicios/libro-reclamacion">
                    <a class="dropdown-item">Libro de reclamación</a>
                  </Link>
                </li> */}
                <li>

                  <a className="dropdown-item" href='https://aulavirtual.iestpfm.edu.pe/moodle30/login/index.php' target='_blank'>Aula Virtual</a>

                </li>
              </ul>
            </li>


            <li className="nav-item">
              <Link legacyBehavior href='/admision'>
                <a className={router.pathname == '/admision' ? 'nav-link active' : 'nav-link'} aria-disabled="true">Admisión</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href='/contacto'>
                <a className={router.pathname == '/contacto' ? 'nav-link active' : 'nav-link'} aria-disabled="true">Contacto</a>
              </Link>
            </li>



            <div className='d-sm-block d-lg-none'>
              <form className="d-flex ">

                {/* <a href='https://aulavirtual.iestpfm.edu.pe/moodle30/login/index.php'>
                    <button className="btn btn-danger" type="submit"><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Aula Virtual</button>
                  </a> */}

                <a href='https://aulavirtual.iestpfm.edu.pe/moodle30/login/index.php' target='_blank' className="btn btn-danger" type="submit" aria-disabled="true"><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Aula Virtual</a>

              </form>
            </div>
          </ul>
        </div>
        <div className='d-none d-lg-block'>
          <form className="d-flex ">

            <a href='https://aulavirtual.iestpfm.edu.pe/moodle30/login/index.php' target='_blank' className="btn btn-danger" type="submit" aria-disabled="true"><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Aula Virtual</a>

            {/* <a href='https://aulavirtual.iestpfm.edu.pe/moodle30/login/index.php'>
                    <button className="btn btn-danger" type="submit"><FontAwesomeIcon icon={['far', 'user']}></FontAwesomeIcon> Aula Virtual</button>
                  </a> */}
          </form>
        </div>

      </nav>
    </div>
  )
}
