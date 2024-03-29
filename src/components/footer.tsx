import Image from "next/image";
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
          <Image src={'/assets/dogs-footer.svg'} alt="Dogs" width={28} height={22}/>
            <p>
               Jonathan Bryan &copy; {new Date().getFullYear()}
            </p>
        </div>
    )
}