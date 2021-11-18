import Head from 'next/head'

import styles from './layout.module.scss'

import Navbar from "./navbar"
import Footer from "./footer"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout({ children, title, description }) {


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <header className={`'container-fluid' ${styles.wrapperHeader}`}>
                <Navbar />
            </header>

            <motion.main
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                variants={variants} // Pass the variant object into Framer Motion 
                transition={{ type: 'linear' }} // Set the transition to linear
                className="flex flex-col items-start w-full pt-10
                px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                pt-24 h-full"
            >
                {children}
            </motion.main>

            {/* <main>{children}</main> */}
            <div className={styles.wrapperFooter}>
                <Footer />
            </div>



            <a className={styles.btnWhatsApp} href="https://wa.me/+51970584592?text=Hola%20I.E.S.T.P.%20Florencia%20De%20Mora%20deseo%20recibir%20información%20sobre:%20" target='_blank'>
                <FontAwesomeIcon icon={['fab', 'whatsapp']} />
            </a>
        </>
    )
}
Layout.defaultProps = {
    title: 'Instituto de Educación Superior Tecnológico Público Florencia de Mora',
    description: 'Descripcion del sitio web.'
}