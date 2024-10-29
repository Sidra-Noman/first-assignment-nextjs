import Link from "next/link";
import styles from '../app-development/app.module.css';

const SeoPage =() =>{

    return (
    <div className={styles.container}>
       

        <ul className={styles.cont4} >
      <li><Link href="/services">Go to services Page</Link></li>    
      
      </ul>

      <h1 className={styles.title}>This is my app development page
      </h1>
        </div>
    
    );
};
            
   
export default SeoPage;