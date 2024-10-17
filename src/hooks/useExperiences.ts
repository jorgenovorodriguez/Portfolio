import { useEffect, useState } from 'react';
import axios from 'axios';
import { ExperienceData } from '../interfaces/interfaces';
import { getExperienceData } from '../services/apiServices';
import { EXPERIENCE_GRADHOC_REFERENCE } from '../content/links';
import { t } from 'i18next';
import { useError } from '../contexts/ErrorContext';

const useExperiences = () => {
    const [experiences, setExperiences] = useState<ExperienceData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { setError } = useError();

    useEffect(() => {
        const fetchExperiences = async () => {
            setLoading(true);
            try {
                const experienceData = await getExperienceData();

                const updatedData = experienceData.map((item) => ({
                    ...item,
                    referenceLink: item.id === 1 ? EXPERIENCE_GRADHOC_REFERENCE : item.referenceLink,
                }));

                setExperiences(updatedData);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError('Error al obtener los datos de experiencia');
                } else {
                    setError(t('Error desconocido'));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    return { experiences, loading };
};

export default useExperiences;
