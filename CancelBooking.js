const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { bookingId } = JSON.parse(event.body);

    const params = {
        TableName: 'Bookings',
        Key: { bookingId },
        UpdateExpression: 'SET #status = :canceled',
        ExpressionAttributeNames: { '#status': 'status' },
        ExpressionAttributeValues: { ':canceled': 'canceled' }
    };

    await dynamoDB.update(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Booking canceled successfully' })
    };
};
