const preferenceUrl = 'http://100.81.5.26:9091';
export const services = {
    getBatchList,
    getSectionList,
    getStateList,
    getCityList
};

function getRequestOptions(type, body) {
    let requestOptions = {
        method: type
    };
    if (body) {
        requestOptions['body'] = body;
    }
    return requestOptions;
}

function getBatchList(departmentId){
    let url = preferenceUrl + '/api/batch-by-filters';
    const requestOptions = getRequestOptions("GET", null);
    return fetch(`${url}?departmentId=${departmentId}`, requestOptions).then(response => response.json());
}

function getSectionList(batchId){
    let url = preferenceUrl + '/api/section-by-filters';
    const requestOptions = getRequestOptions("GET", null);
    return fetch(`${url}?batchId=${batchId}`, requestOptions).then(response => response.json());
}

function getStateList(){
    let url = preferenceUrl + '/api/states';
    const requestOptions = getRequestOptions("GET", null);
    return fetch(`${url}`, requestOptions).then(response => response.json());
}

function getCityList(){
    let url = preferenceUrl + '/api/cities';
    const requestOptions = getRequestOptions("GET", null);
    return fetch(`${url}`, requestOptions).then(response => response.json());
}