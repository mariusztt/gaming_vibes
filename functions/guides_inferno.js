exports.handler = async (event, context) => {

    const guides_inferno = [
        {map: 'Inferno', granade_type: 'smoke', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Inferno', granade_type: 'flash', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Inferno', granade_type: 'molotov', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Inferno', granade_type: 'nade', place: 'A', img: '../public/cs_ss/img1'},
    ]

    if(context.clientContext.user) {
    return {
        statusCode: 200,
        body: JSON.stringify(guides_inferno)
    }
    }
    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'You must be logged in to see the guides'})
    }
}