const baseUrl = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp?method=';

export const login = async (email, password) => {
    
    let response = await fetch(`${baseUrl}login`,{
        method: 'POST',
        body: JSON.stringify({ email, password })
    });

    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
    }
    
    return json_data.data;
};

export const register = async (email, password,user_nm) => {
    console.info("bbb");

    let response = await fetch(`${baseUrl}register_new_user`,{
        method: 'POST',
        body: JSON.stringify({ email, password,user_nm })
    });

    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
    }
    
    return json_data.data;

    // let response = await fetch(`${baseUrl}register_new_user`,{
    //     method: 'POST',
    //     body: JSON.stringify({ email, password,user_nm })
    // });

    // let json_data = await response.json();
    // if( json_data.status === "error" ){
    //     throw(json_data.description);
    // }
    
    // return json_data.data;
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