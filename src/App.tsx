import styles from './App.module.css';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Technologies } from './components/Technologies/Technologies';
import { Footer } from './components/Footer/Footer';
import './i18n';
import MouseFollower from './components/MouseFollower/MouseFollower';
import { Works } from './components/Works/Works';

const App = () => {
    return (
        <>
            <div className={styles.App}>
                <MouseFollower />
                <Navbar />
                <Home />
                <About />
                <Experience />
                <Technologies />
                <Works />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
