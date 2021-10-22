exports.handler = async (event, context) => {

    const guides_train = [
        {map: 'Train', granade_type: 'smoke', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Train', granade_type: 'flash', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Train', granade_type: 'molotov', place: 'A', img: '../public/cs_ss/img1'},
        {map: 'Train', granade_type: 'nade', place: 'A', img: '../public/cs_ss/img1'},
    ]

    if(context.clientContext.user) {
    return {
        statusCode: 200,
        body: JSON.stringify(guides_train)
    }
    }
    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'You must be logged in to see the guides'})
    }
}