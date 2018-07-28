const apiFetch = (url, body={}) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json()
        }).then(json=>{
            if (json.status === 1) {
                resolve(json.body)
            } else {
                reject(json)
            }
        }).catch(e=>{
            reject({msg: '系统繁忙，请联系管理员或稍后再试'})
        })
    })
};

export default apiFetch;