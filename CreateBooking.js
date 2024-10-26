const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { carId } = JSON.parse(event.body);
    const bookingId = `${Date.now()}-${carId}`;

    const params = {
        TableName: 'Bookings',
        Item: {
            bookingId: bookingId,
            carId: carId,
            status: 'booked'
        }
    };

    await dynamoDB.put(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Booking created successfully', bookingId })
    };
};
