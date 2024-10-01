export const getImageUrl = (path: string): string | undefined  => {
    try {
        return `/assets/${path}`; 
    } catch (error) {
        console.error(error);
    }
};

export const redirectToWebsite = (url: string): void => {
    try {
        window.open(url, '_blank');
    } catch (error) {
        console.error(error);
    }
};
