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

export const formatDateToMonthYear = (dateString: string): string => {
    try {
        const date = new Date(dateString);

        const format: Intl.DateTimeFormatOptions = { month: 'short', year: '2-digit' };

        const formattedDate = date.toLocaleDateString('en-US', format).replace(',', '');
        
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).toLowerCase();
    } catch (error) {
        console.error(error);
        return dateString; 
    }
};

export const copyText = async (texto: string) => {
    try {
        await navigator.clipboard.writeText(texto);
    } catch (err) {
        console.error(err);
    }
};
