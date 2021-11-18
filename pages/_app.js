// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.scss'

import Head from 'next/head';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

//import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faUsers, faCheck, faPhoneVolume, faEnvelope, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faClock, faUser, faEnvelopeOpen, faFileAlt, faFilePdf } from '@fortawesome/free-regular-svg-icons';



import { useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';


export default function MyApp({ Component, pageProps, router }) {


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <AnimatePresence

        initial={false}
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>

        <Component {...pageProps} key={router.route} />

      </AnimatePresence>
    </>
  )
}

library.add(fab, faMobileAlt, faPhoneVolume, faUsers, faClock, faCheck, faUser, faEnvelopeOpen, faEnvelope, faFileAlt, faFilePdf, faUserGraduate)
