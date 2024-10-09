import Link from "next/link";
import styles from '../services/service.module.css';

const ServicePage =() =>{

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>This is my Service page
        </h1>

        <ul>
      <li><Link href="/services/seo-service">Go to  Seo Service page</Link></li>    
      
      </ul>


        </div>
    
    );
};
            
   
export default ServicePage;