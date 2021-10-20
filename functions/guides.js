exports.handler = async (event, context) => {

    const guides = [
        {title: 'CS1', description: 'smoke'},
        {title: 'CS2', description: 'molotov'},
        {title: 'CS3', description: 'flash'}
    ]

    if(context.clientContext.user) {
    return {
        statusCode: 200,
        body: JSON.stringify(guides)
    }
    }
    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'You must be logged in to see the guides'})
    }
}