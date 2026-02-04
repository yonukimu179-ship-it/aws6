#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();
new CdkStack(app, 'GitHubActionsDemoStack', {
  stackName: 'GitHubActionsDemoStack', // 衝突しない名前を設定してください
});