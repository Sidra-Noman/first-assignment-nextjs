import Link from "next/link";
import styles from '../seo-service/seo.module.css';

const SeoPage =() =>{

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>This is my  Seo Service page
        </h1>

        <ul>
      <li><Link href="/">Go to Home Page</Link></li>    
      
      </ul>

 
        </div>
    
    );
};
            
   
export default SeoPage;