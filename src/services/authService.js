const baseUrl = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp';


export const login = async function postData(url = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp', data = {blago:1, mimi:2}) {
    // Default options are marked with *
    console.log(data);
    const response = await fetch(`${baseUrl}?rrrr=1`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

export const login1 = async (email, password) => {
    console.log(email+"<---->"+password);
    let res = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
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