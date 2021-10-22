exports.handler = async (event, context) => {

    const guides_dust2 = [
        {map: 'Dust II', granade_type: 'smoke', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Dust II', granade_type: 'flash', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Dust II', granade_type: 'molotov', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Dust II', granade_type: 'nade', place: 'A', img: '../public/cs_ss/img1'},
    ]

    if(context.clientContext.user) {
    return {
        statusCode: 200,
        body: JSON.stringify(guides_dust2)
    }
    }
    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'You must be logged in to see the guides'})
    }
}