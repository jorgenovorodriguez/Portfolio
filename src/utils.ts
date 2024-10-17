export const getImageUrl = (path: string): string | undefined  => {
    try {
        return `/assets/${path}`; 
    } catch (error) {
        console.error(error);
    }
};

export const redirectToWebsite = (url: string): boolean => {
    try {
        const newWindow = window.open(url, '_blank');

        if (newWindow) {
            newWindow.opener = null; 
            return true; 
        } else {
            return false; 
        }
    } catch (error) {
        console.error(error);
        return false; 
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

export const copyText = async (texto: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(texto);
        return true; 
    } catch (err) {
        console.error(err);
        return false;
    }
};

export const capitalizeFirstLetter = (string: string): string => {
    if (!string) return string; 
    return string.charAt(0).toUpperCase() + string.slice(1);
}
