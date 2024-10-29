import Link from "next/link";
import styles from '../services/service.module.css';

const ServicePage =() =>{

    return (
    <div className={styles.container}>
       <h1 className={styles.title}>This is my Service page
       </h1>

        <ul className={styles.cont3}>
      <li><Link href="/services/app-development">Go to app development page</Link></li>
      <li><Link href="/services/website-development">Go to  Website development page</Link></li>     
      
      </ul>
      

        </div>
    
    );
};
            
   
export default ServicePage;