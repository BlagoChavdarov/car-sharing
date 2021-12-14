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



    let response = await fetch(`${baseUrl}get_my_cars`,{
        method: 'POST',
        body: JSON.stringify({user_num,sess})
    });

    let json_data = await response.json();
    console.info(json_data);
    if( json_data.status === "error" ){
        throw(json_data.description);
        console.log("BBBB error ????");
    }else{
        return json_data.data;
    }

};



export const getVignetteData = async (sess,car_num) => {

    console.info("1111");

    let response = await fetch(`${baseUrl}get_vignette_data`,{
        method: 'POST',
        body: JSON.stringify({car_num,sess})
    });

    let json_data = await response.json();
    console.info(json_data);
    if( json_data.status === "error" ){
        throw(json_data.description);
        console.log("BBBB error ????");
    }else{
        return json_data.data;
    }
};

