
import Link from "next/link";
import styles from '../website-development/website.module.css';

const SeoPage =() =>{

    return (
    <div className={styles.container}>
        

        <ul className={styles.cont5}>
      <li><Link href="/">Go to Home Page</Link></li>    
      
      </ul>
      <h1 className={styles.title}>This is my website development page
      </h1>
 
        </div>
    
    );
};
            
   
export default SeoPage;