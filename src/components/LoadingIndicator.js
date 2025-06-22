
export const showLoading = () => {
    const loader = document.getElementById('loading-indicator');
    loader.style.display = 'flex';
};

export const hideLoading = () => {
    const loader = document.getElementById('loading-indicator');
    loader.style.display = 'none';
};
