const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
    const params = {
        TableName: 'CarInventory'
    };
    
    const data = await dynamoDB.scan(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(data.Items)
    };
};
