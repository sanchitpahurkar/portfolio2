#!/usr/bin/env node

/**
 * S3 CORS Configuration Script
 * Run this once to configure CORS on your S3 bucket for direct browser uploads
 * 
 * Usage: node configure-s3-cors.js
 * 
 * Make sure you have AWS credentials configured:
 * - AWS_ACCESS_KEY_ID environment variable
 * - AWS_SECRET_ACCESS_KEY environment variable
 */

import aws from 'aws-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const region = "ap-south-1";
const bucketName = "sanchitpahurkar-portfolio-assets";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
  console.error('❌ Error: AWS credentials not found!');
  console.error('Please set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables');
  process.exit(1);
}

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});

async function configureCORS() {
  try {
    const corsConfigPath = path.join(__dirname, 's3-cors-config.json');
    const corsConfig = JSON.parse(fs.readFileSync(corsConfigPath, 'utf-8'));

    console.log(`🔧 Configuring CORS for bucket: ${bucketName}`);
    console.log('Allowed Origins:');
    corsConfig.CORSRules[0].AllowedOrigins.forEach(origin => {
      console.log(`  - ${origin}`);
    });

    await s3.putBucketCors({
      Bucket: bucketName,
      CORSConfiguration: corsConfig
    }).promise();

    console.log('✅ CORS configuration applied successfully!');
    console.log('\nYou can now upload files directly to S3 from your browser.');
  } catch (error) {
    console.error('❌ Error configuring CORS:', error.message);
    console.error('\nMake sure:');
    console.error('1. Your AWS credentials are valid');
    console.error('2. You have permission to modify bucket CORS settings');
    console.error('3. The bucket name is correct: ' + bucketName);
    process.exit(1);
  }
}

configureCORS();
