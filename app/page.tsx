import Link from "next/link"
// import styles from '../styles/Home.module.css';

import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
    return (    
   <div className="main">

    <nav className="navbar">
      <div className="nav-container">
    <ul className="nav-links">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about" target="_blank">About</Link></li>
      <li><Link href="/contact" target="_blank">Contact</Link></li>
      <li><Link href="/services" target="_blank">Services</Link></li>
      </ul>
      </div>
      </nav> <br />
      
      <h1 className="home">This is my home page</h1>
   </div>
  
  
  
    );
  }
  