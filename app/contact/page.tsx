import Link from "next/link";
import styles from '../contact/contact.module.css';

const ContactPage =() =>{

    return (
    <div className={styles.container}>
        

        <ul className={styles.cont2}>
      <li><Link href="/">Go to Home page</Link></li>    
      <li><Link href="/about"> Go to About page</Link></li>
      <li><Link href="/services"> Go to Services page</Link></li>
      </ul>

      <h1 className={styles.title}>This is my Contact page
      </h1>
        </div>
    
    );
};
            
   
export default ContactPage;