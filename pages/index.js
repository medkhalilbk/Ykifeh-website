import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TopBar from '../compoments/topBar';
import HeroSection from '../compoments/heroSection';
import Section from '../compoments/Section';
import Subscription from '../compoments/Subscription';
import Footer from '../compoments/footer';
import FormSection from '../compoments/formSection';
export default function Home() {
  return (
    <>
     
       <div className={styles.container}>
       <TopBar/>
   <Head>
     <title>Ykifeh App</title>
     <link rel="icon" href="/favicon.ico" />
   </Head>

<main>
 <HeroSection></HeroSection>

</main>
 </div>
 <Section/>
      <Subscription />
      <FormSection/>
      <Footer/>
    </>
  
  )
}
