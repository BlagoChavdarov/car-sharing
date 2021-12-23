const baseUrl = 'http://netsurf2.dev.dotcubes.com/site-api/dispatch_request.asp?method=';



export const add = async (sess,car_plate, description, user_num,file,car_num,imageUrlDB) => {
    let response = await fetch(`${baseUrl}create_car`,{
        method: 'POST',
        body: JSON.stringify({ car_plate, description,user_num,file,sess,car_num,imageUrlDB})
    });

    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
    }
    return json_data.data;
};



export const getOneCar = async (sess, car_num, signal) => {
    console.info("car_numcar_numcar_numcar_num->>>"+car_num);
    if(car_num !== undefined && car_num !== "" ){
        
        let response = await fetch(`${baseUrl}get_one_car`,{
            signal,
            method: 'POST',
            body: JSON.stringify({sess, car_num})
        });

        let json_data = await response.json();
        if( json_data.status === "error" ){
            throw(json_data.description);
        }
        return json_data.data;
    
    }else{
        return {};
    }
}



export const getMyCars = async (sess,user_num) => {



    let response = await fetch(`${baseUrl}get_my_cars`,{
        method: 'POST',
        body: JSON.stringify({user_num,sess})
    });

    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
        
    }else{
        return json_data.data;
    }

};




export const getVignetteData = async (sess,car_num) => {

    let response = await fetch(`${baseUrl}get_vignette_data`,{
        method: 'POST',
        body: JSON.stringify({car_num,sess})
    });

    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
    }else{
        return json_data.data;
    }
};


export const changeStatus = async (sess,car_num,status) => {
    let response = await fetch(`${baseUrl}change_status`,{
        method: 'POST',
        body: JSON.stringify({car_num,sess,status})
    });
    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
    }else{
        return json_data.data;
    }
};


export const getCommentsData = async (sess,car_num) => {
    let response = await fetch(`${baseUrl}get_comments`,{
        method: 'POST',
        body: JSON.stringify({car_num,sess})
    });
    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
    }else{
        return json_data.data;
    }
};


export const addCarComment = async (sess, user_num, car_num, comment) => {
    let response = await fetch(`${baseUrl}add_comment`,{
        method: 'POST',
        body: JSON.stringify({sess, user_num, car_num, comment})
    });
    let json_data = await response.json();
    if( json_data.status === "error" ){
        throw(json_data.description);
    }else{
        return json_data.data;
    }
}