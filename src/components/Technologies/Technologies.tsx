import React from 'react';
import styles from './Technologies.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import { t } from 'i18next';
import { WebIcon } from '../../../public/Icons/WebIcon';
import { TimeIcon } from '../../../public/Icons/TimeIcon';
import { DesignIcon } from '../../../public/Icons/DesignIcon';
import { ServerIcon } from '../../../public/Icons/ServerIcon';
import { VersionIcon } from '../../../public/Icons/VersionIcon';
import { TECHNOLOGIES_TEXT_2 } from '../../content/texts';

export const Technologies: React.FC = () => {
    return (
        <section id='technologies'>
            <div className={styles.container}>
                <h2 className={styles.title}>{t(`Tecnologías`)}</h2>
                {/* <p>{t(TECHNOLOGIES_TEXT_2)}</p> */}
                <ul className={styles.techItems}>
                    <li className={styles.techItem}>
                        <div className={styles.techItemText}>
                            <h3>
                                <WebIcon color={`#5F73B0`} width={`1.6rem`} />
                                Desarrollo de Aplicaciones:
                            </h3>
                            <p>
                                Creación de soluciones dinámicas y eficientes
                                utilizando React y Vite. Gestión de estados
                                globales con Redux Toolkit y tipado robusto a
                                través de TypeScript.
                            </p>
                        </div>
                    </li>
                    <li className={styles.techItem}>
                        <div className={styles.techItemText}>
                            <h3>
                                {' '}
                                <TimeIcon color={`#5F73B0`} width={`1.7rem`} />
                                Tecnologías en Tiempo Real:
                            </h3>
                            <p>
                                Integración de WebSockets para la gestión y
                                actualización de información en tiempo real.
                            </p>
                        </div>
                    </li>
                    <li className={styles.techItem}>
                        <div className={styles.techItemText}>
                            <h3>
                                {' '}
                                <DesignIcon
                                    color={`#5F73B0`}
                                    width={`1.5rem`}
                                />
                                Diseño y Prototipado:{' '}
                            </h3>
                            <p>
                                Diseño de interfaces responsivas mediante CSS y
                                frameworks como Tailwind, Bootstrap y
                                Material-UI (Mui). Prototipado basado en
                                principios de UX/UI con Figma para garantizar
                                una experiencia de usuario fluida.
                            </p>
                        </div>
                    </li>
                    <li className={styles.techItem}>
                        <div className={styles.techItemText}>
                            <h3>
                                <ServerIcon
                                    color={`#5F73B0`}
                                    width={`1.6rem`}
                                />
                                Desarrollo Backend:{' '}
                            </h3>
                            <p>
                                Manejo de Node.js y Express para construir APIs
                                eficientes, trabajando con bases de datos MySQL
                                y aplicando principios de diseño de API REST.
                            </p>
                        </div>
                    </li>
                    <li className={styles.techItem}>
                        <div className={styles.techItemText}>
                            <h3>
                                <VersionIcon
                                    color={`#5F73B0`}
                                    width={`1.7rem`}
                                />
                                Control de Versiones:{' '}
                            </h3>
                            <p>
                                Uso de Git para el control de versiones,
                                facilitando la colaboración y el seguimiento de
                                cambios en el código.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.carouselItem}>
                            <img
                                src={getImageUrl(skill.imageSrc)}
                                alt={skill.title}
                            />
                        </div>
                    ))}
                    {skills.map((skill, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className={styles.carouselItem}
                        >
                            <img
                                src={getImageUrl(skill.imageSrc)}
                                alt={skill.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
