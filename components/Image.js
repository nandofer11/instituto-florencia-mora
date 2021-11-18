import NextImage from "next/image";
import styles from './Image.module.scss';

export default function Image({width, maxWidth, ...rest}){

    let widths = {};
    width ? widths['width'] = width : '100%';

    return(
        <div className={styles.imageContainer} style={widths}>
            <NextImage className={styles.image} {...rest}></NextImage>
        </div>
    )
}