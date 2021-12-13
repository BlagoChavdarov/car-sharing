const baseUrl = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.php?method=';

export const login = async (email, password,user_nm) => {
    
    console.log("email:"+email);
   
    


    let response = await fetch(`http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp?method=login`,{
        method: 'POST',
        body: JSON.stringify({ email, password,user_nm })
    });

    let pets = await response.json();
    console.info(pets);
    let result = Object.values(pets)

 
    console.info(result);
    return result;
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