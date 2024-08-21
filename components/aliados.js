import Image from 'next/image'

export default function Aliados() {
    return (
        <div className='container my-5'>
            <div className='row align-items-baseline'>
                <div className='col'>
                    <Image src='/img/Sineace.png' width='159' height='75'></Image>                    
                </div>
                <div className='col'>                    
                    <Image src='/img/ministerio.png' width='250' height='63'></Image>                    
                </div>
                <div className='col'>
                    <Image src='/img/beca.png' width='242' height='86'></Image>
                </div>
                <div className='col'>
                    <Image src='/img/grell.png' width='296' height='37'></Image>
                </div>
            </div>
        </div>
    )
}