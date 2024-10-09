import Link from "next/link"
import styles from '../about/about.module.css';

const AboutPage =() =>{

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>This is my about page
        </h1>

        <ul>
      <li><Link href="/">Go to Home page</Link></li>    
      <li><Link href="/contact"> Go to Contact page</Link></li>
      <li><Link href="/services"> Go to Services page</Link></li>
      </ul>


        </div>
    
    );
};
            
   
export default AboutPage;