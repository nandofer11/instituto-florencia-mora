import Layout from '../../components/layout'

import styles from './id.module.scss'

import Image from "next/image";

export default function Noticia({ noticia }) {
    return (
        <Layout
            title='Noticia  | I.E.S.T.P. Florencia de Mora'
            description='Descripn acerca de la admision en la institucion, misio, vision'>
            <div className={`${styles.wrapperNoti} container`}>
                <div className='row justify-content-center my-5'>
                    <div className='col-8'>
                        <h4 className='text-center'>{noticia.titulo}</h4>
                        <p className='mb-4 text-center'>Fecha de publicación: {noticia.fechaPublicacion}</p>
                        <p>{noticia.contenido}</p>
                    </div>
                </div>


                {/* <Image src={urlBuilder(noticia.imgNoticia[0].url)} width={600} height={350}/> */}
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:1337/noticias/${params.id}`);
    const noticia = await res.json();

    return {
        props: {
            noticia
        }
    }
}