const baseUrl = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp?method=';



export const add = async (car_plate, description,user_num,sess) => {

    let res = await fetch(`${baseUrl}create_car`, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
            'Access-Control-Allow-Origin':'http://netsurf2.dev.dotcubes.com',
            'content-type': 'text/plain'
        },
        body: JSON.stringify({car_plate, description,user_num,sess})
    });
    
    let carResult = await res.json();
    

    if (res.ok) {
        return carResult;
    } else {
        throw carResult.message;
    }
};

export const getMyCars = async (user_num,sess) => {
    let res = await fetch(`${baseUrl}get_my_cars`, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
            'Access-Control-Allow-Origin':'*',
            'content-type': 'text/json'
        },
        body: JSON.stringify({user_num,sess})
    });
    
    let myCars = await res.json();
    

    if (res.ok) {
        return myCars;
    } else {
        throw myCars.message;
    }
};



export const getVignetteData = async (sess,car_num) => {
    console.info("1111");
    let res = await fetch(`${baseUrl}get_vignette_data`, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
            'Access-Control-Allow-Origin':'*',
            'content-type': 'text/json'
        },
        body: JSON.stringify({sess,car_num})
    });
    
    let myCars = await res.json();
    console.info(myCars);

    if (res.ok) {
        return myCars;
    } else {
        throw myCars.message;
    }
};

