import aws from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const region = "ap-south-1"
const bucketName = "sanchitpahurkar-portfolio-assets"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
    region, 
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export async function generateUploadUrl() {
    // Use timestamp to make unique keys
    const timestamp = Date.now();
    const imageName = `blogs/${timestamp}-${Math.random().toString(36).substr(2, 9)}`;

    const params = {
        Bucket: bucketName,
        Key: imageName,
        Expires: 300, // 5 minutes
        ContentType: 'image/*', // This helps with CORS
    }

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
    return uploadUrl;
}