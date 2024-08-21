import Link from 'next/link'

export default function Noticias({noticias}){
    return(
        <div>
            <h1>Noticias</h1>
            <div>
                {
                    noticias.map(noticia=>{
                        return(
                            <Link legacyBehavior href={`/noticias/[id]`} as={`/noticias/${noticia.id}`} key={noticia.id}>
                                <a>
                                    <h3>{noticia.titulo}</h3>
                                    <p>{noticia.contenido}</p>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
         </div>
    )
}

export async function getServerSideProps(){
    const res = await fetch('http://localhost:1337/noticias');
    const noticias = await res.json();

    return {
        props:{
            noticias
        }
    }
}