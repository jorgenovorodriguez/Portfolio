import axios from 'axios';
import { ExperienceData, MessageData, ProjectData } from '../interfaces/interfaces';

const BASE_URL = 'https://portfoliobackend-production-93eb.up.railway.app/api';
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

export const getProjectsData = async (): Promise<ProjectData[]> => {

    try {
        const language = navigator.language ;
        
        const response = await axios.get<ProjectData[]>(`${BASE_URL}/projects`, {
            headers: {
                'Accept-Language': language, 
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de los proyectos:', error);
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

export const getPdf = async (): Promise<void> => {
    try {
        const response = await axios.get(`${BASE_URL}/download`, {
            responseType: 'blob',
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'JorgeNovoRodriguezCvDev.pdf'); 
        document.body.appendChild(link);
        link.click();

        if (link.parentNode) {
            link.parentNode.removeChild(link);
        }
        
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error al descargar el documento:', error);
        throw error;
    }
}; 
