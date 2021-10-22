exports.handler = async (event, context) => {

    const guides_overpass = [
        {map: 'Overpass', granade_type: 'smoke', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Overpass', granade_type: 'flash', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Overpass', granade_type: 'molotov', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Overpass', granade_type: 'nade', place: 'A', img: '../public/cs_ss/img1'},
    ]

    if(context.clientContext.user) {
    return {
        statusCode: 200,
        body: JSON.stringify(guides_overpass)
    }
    }
    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'You must be logged in to see the guides'})
    }
}