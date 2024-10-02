import axios from 'axios';
import { ExperienceData, MessageData } from '../interfaces/interfaces';

const BASE_URL = 'http://localhost:4000/api';

export const getExperienceData = async (): Promise<ExperienceData[]> => {
    try {
        const response = await axios.get<ExperienceData[]>(`${BASE_URL}/experience`);
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
