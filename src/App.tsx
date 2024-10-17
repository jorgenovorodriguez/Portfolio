import styles from './App.module.css';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Index/Experience';
import { Contact } from './components/Contact/Contact';
import { Technologies } from './components/Technologies/Index/Technologies';
import { Footer } from './components/Footer/Footer';
import './i18n';
import MouseFollower from './components/MouseFollower/MouseFollower';
import { Works } from './components/Works/Index/Works';
import Toast from './components/Toast/Toast';

const App = () => {
    return (
        <>
            <div className={styles.App}>
                <Toast />
                <Navbar />
                <MouseFollower />
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
