import Link from "next/link"
import styles from '../about/about.module.css';

const AboutPage =() =>{

    return (
    <div className={styles.container} >
       

        <ul className={styles.cont}>
      <li><Link href="/">Go to Home page</Link></li>    
      <li><Link href="/contact"> Go to Contact page</Link></li>
      <li><Link href="/services"> Go to Services page</Link></li>
      </ul>
      <h1 className={styles.title}>This is my about page
      </h1>

        </div>
    
    );
};
            
   
export default AboutPage;