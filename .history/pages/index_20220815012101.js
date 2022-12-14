import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Contact from '../components/Contact';
export default function Home() {
  return (
    <div>
      <Head>
        <title>FE</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Project />
    </div>
  );
}
