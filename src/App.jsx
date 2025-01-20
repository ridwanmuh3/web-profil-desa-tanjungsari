import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisiMisi from './components/VisiMisi';
import StrukturOrganisasi from './components/StrukturOrganisasi';
import DataStatistik from './components/DataStatistik';
import Galeri from './components/Galeri';
import Potensi from './components/Potensi';
import Wilayah from './components/Wilayah';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <article id='profil'>
        <About />
        <VisiMisi />
        <StrukturOrganisasi />
        <DataStatistik />
      </article>
      <Galeri />
      <Potensi />
      <Wilayah />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
