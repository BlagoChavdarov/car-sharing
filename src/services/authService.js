const baseUrl = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp?method=';

export const loginCheck = async (email,password,user_nm) => {
    let res = await fetch('https://unipek.dev.prim.bg/EXECUTE/api/RPC.cash.CashApi.getAllItems?token=f37x4acf66gl2d82b2d107850108g51s&cash_id=0020',{
        method: 'POST',  
        headers: {
            'Access-Control-Allow-Origin':'https://unipek.dev.prim.bg',
            'content-type': 'application/json'
        },
    });
    //let res = await fetch('https://swapi.dev/api/people/1/?format=json');
    let jsonResult = await res.json();
    
  return res.json();
}

export const login = async (email, password,user_nm) => {
    
    let res = await fetch(`${baseUrl}login`, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
            'Access-Control-Allow-Origin':'http://netsurf2.dev.dotcubes.com',
            'content-type': 'text/plain'
        },
        body: JSON.stringify({ email, password,user_nm })
    });
    
    let jsonResult = await res.json();
    

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
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