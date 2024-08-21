import Image from 'next/image'

import styles from './card.module.scss'


export default function Card() {
    return (
        <div>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <Image src='/img/egresado1.png' width='371' height='371'></Image>
                
                    </div>
                    <div className={styles.flipCardBack}>
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

