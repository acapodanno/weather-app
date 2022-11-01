function processResponse(resp) {
    let response = "";
    resp.on('data', chuck => {
        response += chuck;
        console.log(response)
    });
    resp.on('end', () => {
        try {
            const weather = JSON.parse(response);
            console.log(weather);
        } catch (error) {
            console.error(error.message);

        }
    });
}
module.exports={
    processResponse
}