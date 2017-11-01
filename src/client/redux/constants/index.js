const mongoLabApiKey = '?apiKey=FmIllpfosmgRaRMQtSEVwizeCBTLl2w1';

const API_ROOT = `https://api.mlab.com/api/1/databases/wayup/collections`;

export const TODOS = `${API_ROOT}/todos${mongoLabApiKey}`;
export const TODO = (id) => `${API_ROOT}/todos/${id}${mongoLabApiKey}`;
