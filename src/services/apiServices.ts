import axios from 'axios';
import { ExperienceData, MessageData } from '../interfaces/interfaces';

const BASE_URL = 'https://portfoliobackend-production-da58.up.railway.app/api';
const BASE_LOCAL = 'http://localhost:4000/api'

export const getExperienceData = async (): Promise<ExperienceData[]> => {
    try {
        const language = navigator.language ;
        
        const response = await axios.get<ExperienceData[]>(`${BASE_URL}/experience`, {
            headers: {
                'Accept-Language': language, 
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de experiencia:', error);
        throw error; 
    }
};

export const postMessageData = async (data: MessageData): Promise<any> => {
    try {
        const response = await axios.post(`${BASE_URL}/message`, data);
        return response.data;
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        throw error;
    }
};
