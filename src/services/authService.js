const baseUrl = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp?method=';

export const login = async (email, password,user_nm) => {
    
    console.log("4444444444:"+email);
   
    


    let response = await fetch(`${baseUrl}login`,{
        method: 'POST',
        body: JSON.stringify({ email, password,user_nm })
    });

    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
        console.log("BBBB error ????");
    }
    console.info("->>>>>>"+json_data.status);
    console.info(json_data.data);
    return json_data.data;
    // let res = await fetch(baseUrl+'login', {
    //     method: 'POST',
    //     mode: 'no-cors', 
    //     headers: {
    //         'Access-Control-Allow-Origin':'http://netsurf2.dev.dotcubes.com',
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({ email, password,user_nm })
    // });
    // console.info(res);
    // let jsonResult = await res.json();
    

    // if (res.ok) {
    //     return jsonResult;
    // } else {
    //     throw jsonResult.message;
    // }
};

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json()); 
};

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};