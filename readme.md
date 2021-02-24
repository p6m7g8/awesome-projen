# Awesome Projen [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Curated list of awesome [Projen](https://github.com/projen/projen) open-source projects, guides, blogs and other resources.

Define and maintain complex project configuration through code.

## Contents

- [Training Materials and Sample Code](#training-materials-and-sample-code)
- [Blog Posts & Talks](#blog-posts--talks)
- [Social Media](#social-media)
- [Tips and Tricks](#tips-and-tricks)
- [External Project Types](#external-project-types)
- [Projects using Projen](#projects-using-projen)
  - [Official](#official)
  - [NodeProject](#nodeproject)
  - [JsiiProject](#jsiiproject)
  - [TypeScriptProject](#typescriptproject)
  - [TypeScriptLibraryProject](#typescriptlibraryproject)
  - [AwsCdkTypeScriptApp](#awscdktypescriptapp)
  - [AwsCdkConstructLibrary](#awscdkconstructlibrary)
  - [CdktfProviderProject](#cdktfproviderproject)
  - [Subproject](#subproject)

## Training Materials and Sample Code

- Pahud Hsieh's YouTube [Tutorial](https://youtu.be/cTsSXYOYQPw).
- [Create and Publish CDK Constructs Using projen and jsii](https://github.com/seeebiii/projen-test) - A step-by-step guide with sample code to create a new CDK construct using `projen` and `jsii` and publish it to npm, Maven Central, PyPi and NuGet.

## Blog Posts & Talks

- Elad Ben-Israel's CDK Day 2020 [Talk](https://www.youtube.com/watch?v=SOWMPzXtTCw&feature=youtu.be).
- Matthew Bonig's [Blog](https://matthewbonig.com/2020/10/04/converting-to-projen/).
- Ken Winner's [Blog](https://kennethwinner.com/2020/11/16/custom-projen-project-codeartifact/)
- Philip M. Gollucci's [Blog](https://dev.to/aws-builders/projen-the-next-cdk-suprise-13b2)

## Social Media

- [#projen](https://twitter.com/hashtag/projen?lang=en) - Hash #projen tag on Twitter.

## Tips and Tricks

- Philip M. Gollucci's ohmyzsh [Plugin](https://github.com/ohmyzsh/ohmyzsh/pull/9407)

## External Project Types

- [kcwinner/cdk-appsync-project](https://github.com/kcwinner/cdk-appsync-transformer) - Projen for AppSync.
- [terraform-cdk-providers/cdktf-provider-project](https://github.com/terraform-cdk-providers/cdktf-provider-project/blob/master/.projenrc.js) - Projen for Terraform.
- [guillaumemaka/of-node-projen](https://github.com/guillaumemaka/of-node-projen/blob/main/.projenrc.js) - Open FaaS Node Project.
- [neva-argueta/custom-awscdk-app-ts](https://github.com/neva-argueta/custom-awscdk-app-ts/blob/master/.projenrc.js) -  Aws cdk project with a test stack and lambda function using webpack bundler and other features.
- [taimos/taimos-projen](https://github.com/taimos/taimos-projen/blob/main/.projenrc.js) - CDK App, CDK Construct, Ts Lib.
- [p6m7g8/p6-projen-project-awesome-list](https://github.com/p6m7g8/p6-projen-project-awesome-list) - Projen for Awesome List per its standards, replaces `yeoman`.

## Projects using Projen

### Official

- [aws/constructs](https://github.com/aws/constructs/blob/master/.projenrc.js) - A programming model for composable configuration.
- [aws/jsii-docgen](https://github.com/aws/jsii-docgen/blob/master/.projenrc.js) - Generates api docs for jsii modules.
- [aws/jsii-release](https://github.com/aws/jsii-release/blob/master/.projenrc.js) - Release jsii modules to multiple package managers.
- [aws/jsii-srcmak](https://github.com/aws/jsii-srcmak/blob/master/.projenrc.js) - Generate source code in multiple languages from typescript.
- [aws/json2jsii](https://github.com/aws/json2jsii/blob/master/.projenrc.js) - Generates jsii structs from JSON schemas.
- [awslabs/cdk8s/packages/cdk8s-plus-17](https://github.com/awslabs/cdk8s/blob/master/packages/cdk8s-plus-17/.projenrc.js) - High level abstractions on top of cdk8s.
- [awslabs/cdk8s/packages/cdk8s-cli](https://github.com/awslabs/cdk8s/blob/master/packages/cdk8s-cli/.projenrc.js) - CLI for CDK8s.
- [awslabs/cdk8s/packages/cdk8s](https://github.com/awslabs/cdk8s/blob/master/packages/cdk8s/.projenrc.js) - Cloud Development Kit for Kubernetes.
- [aws-samples/aws-cdk-for-k3scluster](https://github.com/aws-samples/aws-cdk-for-k3scluster/blob/master/.projenrc.js) - A JSII construct lib to deploy a K3s cluster on AWS with CDK.
- [aws-samples/aws-fargate-fast-autoscaler](https://github.com/aws-samples/aws-fargate-fast-autoscaler/blob/master/.projenrc.js) - A JSII construct lib to build AWS Fargate Fast Autoscaler.
- [aws-samples/cdk-serverless-lamp](https://github.com/aws-samples/cdk-serverless-lamp/blob/master/.projenrc.js) - A JSII construct lib to build AWS Serverless LAMP with AWS CDK.
- [cdk-dev/link-scraper](hhttps://github.com/aws-samples/cdk-serverless-lamp/blob/master/.projenrc.js) - Scrapes Links from sites used by cdk.dev website.
- [construct-catalog/catalog/packages/catalog-search](https://github.com/construct-catalog/catalog/blob/master/packages/catalog-search/.projenrc.js) - Search application for the construct catalog.
- [p6m7g8/awesome-projen](https://github.com/p6m7g8/awesome-projen/blob/main/.projenrc.js) - This awesome list.

### NodeProject
- [mmuller88/influxdb-s3-backup](https://github.com/mmuller88/influxdb-s3-backup) - A docker image based on InfluxDB and enhanced with awc cli + backupscripts which is runnable on arm64 (raspberries) as well.

### JsiiProject

- [ArmaanT/cdkactions/packages/cdkactions](https://github.com/ArmaanT/cdkactions/blob/master/packages/cdkactions/.projenrc.js) - Cloud Development Kit for GitHub Actions.
- [eladb/cdk8s-dashboard](https://github.com/eladb/cdk8s-dashboard/blob/master/.projenrc.js) - Kubernetes dashboard construct library for cdk8s.
- [eladb/cdk8s-operator](https://github.com/eladb/cdk8s-operator/blob/master/.projenrc.js) - CDK8s operator like pattern.
- [eladb/cdk8s-redis](https://github.com/eladb/cdk8s-redis/blob/master/.projenrc.js) - CKD8s Constructs for redis.
- [eladb/cfunctions](https://github.com/eladb/cfunctions/blob/main/.projenrc.js) - Cloud Functions.
- [iliapolo/aws-cdk-sdk](https://github.com/iliapolo/aws-cdk-sdk/blob/main/.projenrc.js) - CDK for the AWS SDK.
- [iliapolo/constructs-tokens-staging](https://github.com/iliapolo/constructs-tokens-staging/blob/master/.projenrc.js) - Tokens system for the constructs programming model.
- [mmuller88/alps-unified-ts](https://github.com/mmuller88/alps-unified-ts/blob/master/.projenrc.js) - Convert an ALPS API spec to other API spec like openApi, Graph QL Schema.
- [rayou/cdk-url-shortener](https://github.com/rayou/cdk-url-shortener/blob/master/.projenrc.js) - Deploy a URL shortener with custom domain support in just a few lines of code.
- [skorfmann/cdktf-aws-ecr-asset](https://github.com/skorfmann/cdktf-aws-ecr-asset/blob/master/.projenrc.js) - Terraform CDK - L2 - AWS ECR Asset.
- [skorfmann/cdktf-github-constructs](https://github.com/skorfmann/cdktf-github-constructs/blob/master/.projenrc.js) - Terraform CDK - L2 - GitHub Provider.
- [toricls/cdk8s-debore](https://github.com/toricls/cdk8s-debore/blob/master/.projenrc.js) - Run your apps on Kubernetes cluster without bored YAMLing.

### TypeScriptProject

- [eladb/cfn-resources](https://github.com/eladb/cfn-resources/blob/main/.projenrc.js) - Prints the list of resource types and logical IDs from a CloudFormation template.
- [eladb/markmac](https://github.com/eladb/markmac/blob/master/.projenrc.js) - Markdown macros - embed program outputs in markdown.
- [mmuller88/alf-cdk-api-gw](https://github.com/mmuller88/alf-cdk-api-gw/blob/master/.projenrc.js) - Alfresco Backend.
- [mmuller88/alf-cdk-cognito](https://github.com/mmuller88/alf-cdk-cognito/blob/master/.projenrc.js) - Cognito User Pool for managing users.
- [mmuller88/alf-cdk-ui/cdk](https://github.com/mmuller88/alf-cdk-ui/blob/master/.projenrc.js) - Alfresco Provisioner Frontend.
- [mmuller88/alf-cdk](https://github.com/mmuller88/alf-cdk/blob/master/.projenrc.js) - The Alfresco Provisioner.
- [mmuller88/alfresco-ocr](https://github.com/mmuller88/alfresco-ocr/blob/master/.projenrc.js) - Alfresco OCR.
- [mmuller88/aws-cdk-stagging-pipeline](https://github.com/mmuller88/aws-cdk-staging-pipeline/blob/master/.projenrc.js)
- [skorfmann/cfn2tf](https://github.com/skorfmann/cfn2tf/blob/benisrae/.projenrc.js) - Converts CloudFormation resources to Terraform resources.
- [wheatstalk/ecs-service-extension-listener-rules](https://github.com/wheatstalk/ecs-service-extension-listener-rules/blob/master/.projenrc.js) - Listener Rule Extension.

### TypeScriptLibraryProject

- [ArmaanT/cdkactions/packages/cdkactions-cli](https://github.com/ArmaanT/cdkactions/blob/master/packages/cdkactions-cli/.projenrc.js) - CDK for GitHub Actions CLI.

### AwsCdkTypeScriptApp

- [OperationalFallacy/max-lambda-out](https://github.com/OperationalFallacy/max-lambda-out/blob/master/.projenrc.js) - Pipelines, APIs, Lambdas.
- [aws-samples/amazon-eks-refarch-cloudformation](https://github.com/aws-samples/amazon-eks-refarch-cloudformation/blob/master/.projenrc.js) - Reference architecture of Amazon EKS cloudformation templates and AWS CDK samples.
- [aws-samples/aws-lambda-layer-awscli](https://github.com/aws-samples/aws-lambda-layer-awscli/blob/master/.projenrc.js) - AWS Lambda Layer for AWS CLI.
- [davidsung/ecs-kinesis-log-archiving-cdk](https://github.com/davidsung/ecs-kinesis-log-archiving-cdk/blob/main/.projenrc.js) - Architecture demonstrating ECS Secured Log Streaming using Kinesis Data Stream and Kinesis Data Firehose.
- [davidsung/ecs-servicediscovery-cdk](https://github.com/davidsung/ecs-servicediscovery-cdk/blob/master/.projenrc.js) - A service discovery sample for Lambda and ECS architecture.
- [elthrasher/circular-layer](https://github.com/elthrasher/circular-layer/blob/main/.projenrc.js) - Circular layer aws-lambda-nodejs.
- [fsalamida/aws-report-signin](https://github.com/fsalamida/aws-report-signin/blob/main/.projenrc.js) - Sends email when console login without mfa.
- [guan840912/aws-lambda-container-sample/cdk-lambda-container](https://github.com/guan840912/aws-lambda-container-sample/blob/main/cdk-lambda-container/.projenrc.js) - This is Lambda Custom Container Sample repo.
- [guan840912/cdk-okd-311-infra](https://github.com/guan840912/cdk-okd-311-infra/blob/main/.projenrc.js) - Sample for One Master Node Infra node OKD 3.11 Cluster via AWS CDK.
- [guan840912/cdk-sample-save/aws-cdk-typescript/centosInstance](https://github.com/guan840912/cdk-sample-save/blob/master/aws-cdk-typescript/centosInstance/.projenrc.js) - CentOs instance w/ Docker.
- [guan840912/cdk-sample-save/aws-cdk-typescript/eks-console-view](https://github.com/guan840912/cdk-sample-save/blob/master/aws-cdk-typescript/eks-console-view/.projenrc.js) - Eks viewable in console.
- [guan840912/cdk-sample-save/aws-cdk-typescript/lambda-container](https://github.com/guan840912/cdk-sample-save/blob/master/aws-cdk-typescript/lambda-container/.projenrc.js) - Lambda container.
- [guan840912/cdk-sample-save/aws-cdk-typescript/lambda-s3-endpoint](https://github.com/guan840912/cdk-sample-save/blob/master/aws-cdk-typescript/lambda-s3-endpoint/.projenrc.js) - Lambda S3 endpoint.
- [guan840912/cdk8s-cdk-example](https://github.com/guan840912/cdk8s-cdk-example/blob/main/.projenrc.js) - 2048 game.
- [guan840912/ddt-techday-demo](https://github.com/guan840912/ddt-techday-demo/blob/main/.projenrc.js) - DDT Tech Day Demo CDK Part.
- [guan840912/rke2-eks-d-lab](https://github.com/guan840912/rke2-eks-d-lab/blob/main/.projenrc.js) - rke2 featuring eks-d cdk sample project.
- [kcwinner/advocacy/cubejs-serverless-demo](https://github.com/kcwinner/advocacy/blob/master/cubejs-serverless-demo/.projenrc.js) - Cube.js Serverless Demo.
- [kirkchen/cdk-jenkins-with-dynamic-workers](https://github.com/kirkchen/cdk-jenkins-with-dynamic-workers/blob/main/.projenrc.js) - CDK - Jenkins with dynamic worker - Stateless Jenkins leader on AWS Fargate with on-demand Windows and Linux workers.
- [martzcodes/blog-cdk-openapi](https://github.com/martzcodes/blog-cdk-openapi/blob/main/.projenrc.js) - OpenAPI Specs from CDK Stack WITHOUT Deploying First.
- [martzcodes/blog-ts-request-validation](https://github.com/martzcodes/blog-ts-request-validation/blob/main/.projenrc.js) - How to Automatically Generate Request Models from TypeScript Interfaces.
- [mbonig/cdk-published-listener](https://github.com/mbonig/cdk-published-listener/blob/master/.projenrc.js) - Listens for CDK publishing to an SNS topic and sends you an e-mail.
- [mmuller88/aws-api-gw-petstore-example](https://github.com/mmuller88/aws-api-gw-petstore-example/blob/master/.projenrc.js) - A cool AWS API Gateway petstore example with a cdk staging pipeline.
- [mmuller88/aws-cdk-todolist](https://github.com/mmuller88/aws-cdk-todolist/blob/master/.projenrc.js) - An AWS CDK todolist backend using appsync and dynamodb.
- [mmuller88/aws-cdk-todolist-ui](https://github.com/mmuller88/aws-cdk-todolist-ui/blob/master/.projenrc.js) - AWS Amplify React frontend for mmuller88/aws-cdk-todolist containing S3, Amplify, React and a CDK Pipeline.
- [mmuller88/cdk-alps-constructs-demo](https://github.com/mmuller88/cdk-alps-constructs-demo/blob/master/.projenrc.js) - API Gateway and GraphQL generated out of the ALPS spec src/todo-alps.yaml.
- [mmuller88/rasp4](https://github.com/mmuller88/rasp4/blob/master/.projenrc.js) - Remote control my Raspberry 4 via AWS CodeDeploy & AWS CDK.
- [nikovirtala/cdk-preview-environments](https://github.com/nikovirtala/cdk-preview-environments/blob/main/.projenrc.js) - Pull Request Preview Environments with AWS CDK and GitHub Actions.
- [pahud/aws-cdk-eks-sample](https://github.com/pahud/aws-cdk-eks-sample/blob/main/.projenrc.js) - Sample CDK application to create a sample Amazon EKS cluster.
- [pahud/aws-cdk-fargate-sample](https://github.com/pahud/aws-cdk-fargate-sample/blob/main/.projenrc.js) - Sample CDK application to create a sample Fargate service with ALB.
- [pahud/aws-cdk-serverless-sample](https://github.com/pahud/aws-cdk-serverless-sample/blob/master/.projenrc.js) - Sample AWS CDK app for Amazon API Gateway and AWS Lambda.
- [pahud/aws-cdk-spotone-sample](https://github.com/pahud/aws-cdk-spotone-sample/blob/main/.projenrc.js) - Sample CDK application to create one durable spot instance with cdk-spot-one.
- [pahud/cdk-cfn-module-securebucket](https://github.com/pahud/cdk-cfn-module-securebucket/blob/main/.projenrc.js) - A "secure" S3 bucket.
- [pahud/eks-cdk8s-refarch](https://github.com/pahud/eks-cdk8s-refarch/blob/master/.projenrc.js) - Reference architecture for building load-balanced web services in Amazon EKS with AWS CDK and CDK8S.
- [pahud/fargate-global](https://github.com/pahud/fargate-global/blob/main/.projenrc.js) - CDK app that provisions multi-regional AWS Application Load-balanced Fargate services with AWS Global Accelerator.
- [pahud/fargate-service-single-task](https://github.com/pahud/fargate-service-single-task/blob/main/.projenrc.js) - Fargate single task.
- [pahud/lambda-gin-refarch](https://github.com/pahud/lambda-gin-refarch/blob/master/.projenrc.js) - Reference architecture for AWS Lambda with Golang(Gin HTTP Framework), Amazon API Gateway and AWS SAM deployment.
- [pgarbe/cdk-stackset](https://github.com/pgarbe/cdk-stackset/blob/master/.projenrc.js) - Stackset example.
- [pszabop/cdk-vpc-export-import-test](https://github.com/pszabop/cdk-vpc-export-import-test/blob/master/.projenrc.js) - Export VPC from one stack, import to another.
- [rogerchi/vns-pdf-gen](https://github.com/rogerchi/vns-pdf-gen/blob/main/.projenrc.js) - Generates pdf from vns in lambda.
- [stefanfreitag/csv-to-heartbeat-yml/cdk](https://github.com/stefanfreitag/csv-to-heartbeat-yml/blob/master/cdk/.projenrc.js) - Converts CSV data to heartbeat yml files.
- [stefanfreitag/helloWorldLambda](https://github.com/stefanfreitag/helloWorldLambda/blob/master/.projenrc.js) - Hello World application using an AWS API Gateway and Lambda function.
- [titanjer/cdk-lambda-edge](https://github.com/titanjer/cdk-lambda-edge/blob/master/.projenrc.js) - Validate app version in request user-agent using lambda@edge.

### AwsCdkConstructLibrary

- [EdwinRad/cdkfoldingathome](https://github.com/EdwinRad/cdkfoldingathome/blob/main/.projenrc.js) - Never forget to shut off expensive instances. With built-in TTL for your stack, you just define the lifetime of your instances and the stack will be destroyed afterwards.
- [JordanSinko/the-slack-pipeline-approval](https://github.com/JordanSinko/the-slack-pipeline-approval/blob/master/.projenrc.js) - CDK pipelines with approvals.
- [SnapPetal/cdk-cloudfront-deploy](https://github.com/SnapPetal/cdk-cloudfront-deploy/blob/main/.projenrc.js) - Simplify deploying a single-page website use CloudFront distributions.
- [StErMi/cdk-website](https://github.com/StErMi/cdk-website/blob/main/.projenrc.js) - AWS CDK construct to instantly deploy a static website on serverless infrastructure. Easy, fast, done.
- [cerealcoder/aws-cdk-serverless-timer](https://github.com/cerealcoder/aws-cdk-serverless-timer/blob/master/.projenrc.js) - Deploy a scalable periodic timer that invokes scalable a Lambda function. The timer service is controlled by an API Gateway REST API.
- [clarencetw/cdk-sns-notify](https://github.com/clarencetw/cdk-sns-notify/blob/master/.projenrc.js) - CDK library to send line notify or discord webhook.
- [clarencetw/cdk-wordpress](https://github.com/clarencetw/cdk-wordpress/blob/master/.projenrc.js) - CDK construct library to deploy WordPress.
- [co2zxc/aws-cdk-test](https://github.com/co2zxc/aws-cdk-test/blob/main/.projenrc.js) - High level CDK construct to provision GitLab integrations with AWS.
- [eladb/cdk-asset-publisher](https://github.com/eladb/cdk-asset-publisher/blob/main/.projenrc.js) - Publish an asset to buckets in multiple regions (or all regions) via a pipeline.
- [flyingImer/cdk-distributed-computing](https://github.com/flyingImer/cdk-distributed-computing/blob/master/.projenrc.js) - A place holds distributed patterns using serverless power.
- [guan840912/cdk-aurora-globaldatabase](https://github.com/guan840912/cdk-aurora-globaldatabase/blob/master/.projenrc.js) - AWS CDK construct library that allows you to create Amazon Aurora Global Databases with AWS CDK in Typescript or Python.
- [guan840912/cdk-events-notify](https://github.com/guan840912/cdk-events-notify/blob/main/.projenrc.js) - Events Notify AWS Construct lib for AWS CDK.
- [guan840912/cdk-gitlab-runner](https://github.com/guan840912/cdk-gitlab-runner/blob/master/.projenrc.js) - Gitlab Runner JSII construct lib for AWS CDK.
- [guan840912/cdk-s3bucket](https://github.com/guan840912/cdk-s3bucket/blob/master/.projenrc.js) - AWS CDK construct library that provides a drop-in replacement for the Bucket construct with the capability to remove non-empty S3 buckets.
- [guan840912/cdk-sample-save/aws-cdk-typescript/resource-overwrite-ecs-sample](https://github.com/guan840912/cdk-sample-save/blob/master/aws-cdk-typescript/resource-overwrite-ecs-sample/.projenrc.js) - ECS overwrite example.
- [guan840912/secure-bucket](https://github.com/guan840912/secure-bucket/blob/main/.projenrc.js) - A "secure" bucket".
- [hayao-k/cdk-ecr-image-scan-notify](https://github.com/hayao-k/cdk-ecr-image-scan-notify/blob/main/.projenrc.js) - AWS CDK construct library that notify the slack channel of Amazon ECR image scan results.
- [jogold/cloudstructs](https://github.com/jogold/cloudstructs/blob/master/.projenrc.js) - EcsServiceRoller EmailReceiver SlackEvents SlackTextract StateMachineCustomResourceProvider StaticWebsite UrlShortner.
- [kcwinner/cdk-appsync-transformer](https://github.com/kcwinner/cdk-appsync-transformer/blob/main/.projenrc.js) - AppSync Transformer Construct for AWS CDK.
- [kcwinner/cdk-bucket-deployment-expirator](https://github.com/kcwinner/cdk-bucket-deployment-expirator/blob/main/.projenrc.js) - Opinionated CDK Bucket Deployment object pruner for maintaining N old versions.
- [kirkchen/cdk-image-builder-patterns](https://github.com/kirkchen/cdk-image-builder-patterns/blob/main/.projenrc.js) - CDK Construct to build Windows images via Jenkins and Powershell.
- [markusl/cdk-codepipeline-bitbucket-build-result-reporter](https://github.com/markusl/cdk-codepipeline-bitbucket-build-result-reporter/blob/master/.projenrc.js) - JSII construct lib for reporting AWS CodePipeline build statuses to a Bitbucket server instance.
- [markusl/cdk-ecr-image-scan-handler](https://github.com/markusl/cdk-ecr-image-scan-handler/blob/master/.projenrc.js) - JSII construct for ECR image scan results processing and reporting via Email or Microsoft Teams webhook.
- [mbonig/nightynight](https://github.com/mbonig/nightynight/blob/master/.projenrc.js) - CDK construct that will automatically stop a running EC2 instance at a given time.
- [mbonig/sqs-redrive](https://github.com/mbonig/sqs-redrive/blob/master/.projenrc.js) - Redrive construct to use with an SQS queue and it's dead letter queue.
- [mbonig/wakeywakey](https://github.com/mbonig/wakeywakey/blob/master/.projenrc.js) - CDK construct that will automatically start a stopped EC2 instance at a given time.
- [mikeyangyo/cdk-changelog-slack-notify](https://github.com/mikeyangyo/cdk-changelog-slack-notify/blob/main/.projenrc.js) - JSII construct lib to deploy a service to send new changes pushed to codecommit to slack channel.
- [mmuller88/aws-cdk-ssm-parameter](https://github.com/mmuller88/aws-cdk-ssm-parameter/blob/master/.projenrc.js) - AWS CDK Construct for get the value of an SSM parameter. If the parameter doesn't exist, it will be created. The implementation simply leverages AwsCustomResource as an SDK wrapper.
- [mmuller88/cdk-alps-graph-ql](https://github.com/mmuller88/cdk-alps-graph-ql/blob/main/.projenrc.js) - Generates an AWS Graph QL out of an ALPS API yaml file.
- [mmuller88/cdk-alps-spec-rest-api](https://github.com/mmuller88/cdk-alps-spec-rest-api/blob/main/.projenrc.js) - Generates an AWS API Gateway out of an ALPS API yaml.
- [mmuller88/aws-cdk-build-badge](https://github.com/mmuller88/aws-cdk-build-badge/blob/main/.projenrc.js) - Thats is an AWS CDK custom construct for retrieving a CodeBuild project status.
- [p6m7g8/p6-barrier](https://github.com/p6m7g8/p6-barrier/blob/master/.projenrc.js) - P6Barrier is an AWS CDK Construct that deploys a Custom Resource which will poll until AWS Lambda Function isReady returns true. Ideal for running code AFTER an RDS or EKS is ready.
- [p6m7g8/p6-namer](https://github.com/p6m7g8/p6-namer/blob/master/.projenrc.js) - Sets the AWS IAM Account Alias with a Custom Resource.
- [pahud/awscdk-run](https://github.com/pahud/awscdk-run/blob/main/.projenrc.js) - 1-Click AWS CDK Deploy like CloudFormation.
- [pahud/cdk-apisix](https://github.com/pahud/cdk-apisix/blob/main/.projenrc.js) - CDK construct library to generate serverless Apache APISIX workload on AWS Fargate.
- [pahud/cdk-efs-assets](https://github.com/pahud/cdk-efs-assets/blob/master/.projenrc.js) - Amazon EFS assets from GitHub repositories or S3 buckets.
- [pahud/cdk-eks-spotblocks](https://github.com/pahud/cdk-eks-spotblocks/blob/master/.projenrc.js) - Sample JSII construct lib for AWS CDK.
- [pahud/cdk-fargate-express](https://github.com/pahud/cdk-fargate-express/blob/master/.projenrc.js) - Sample JSII construct lib for Express Apps in AWS Fargate.
- [pahud/cdk-fargate-run-task](https://github.com/pahud/cdk-fargate-run-task/blob/main/.projenrc.js) - Define and run container tasks on AWS Fargate immediately or with schedule.
- [pahud/cdk-gitlab](https://github.com/pahud/cdk-gitlab/blob/main/.projenrc.js) - High level CDK construct to provision GitLab integrations with AWS.
- [pahud/cdk-lambda-extensions](https://github.com/pahud/cdk-lambda-extensions/blob/main/.projenrc.js) - AWS CDK construct library that allows you to add any AWS Lambda extensions to the Lambda functions.
- [pahud/cdk-remote-stack](https://github.com/pahud/cdk-remote-stack/blob/master/.projenrc.js) - Get outputs from cross-regional AWS CDK stacks.
- [pahud/cdk-soca](https://github.com/pahud/cdk-soca/blob/master/.projenrc.js) - AWS CDK construct library that allows you to create the Scale-Out Computing on AWS with AWS CDK in TypeScript or Python.
- [pahud/cdk-spot-one](https://github.com/pahud/cdk-spot-one/blob/master/.projenrc.js) - One spot instance with EIP and defined duration. No interruption.
- [pahud/cdk-ssm-parameter-store](https://github.com/pahud/cdk-ssm-parameter-store/blob/master/.projenrc.js) - AWS CDK construct that allows you to get the latest Version of the AWS SSM Parameters.
- [pgarbe/cdk-bitbucket-server](https://github.com/pgarbe/cdk-bitbucket-server/blob/master/.projenrc.js) - A CDK Construct library to work with BitBucket Server (Stash).
- [pgarbe/cdk-ecr-sync](https://github.com/pgarbe/cdk-ecr-sync/blob/master/.projenrc.js) - CDK Construct to synchronizes Docker images from Docker Hub to ECR.
- [pszabop/cdk-vpc-export-import](https://github.com/pszabop/cdk-vpc-export-import/blob/master/.projenrc.js) - Export VPC from one stack, import to another.
- [stefanfreitag/cdk-budget-notifier](https://github.com/stefanfreitag/cdk-budget-notifier/blob/master/.projenrc.js) - Simple AWS budget notifier.
- [stefanfreitag/gradle_uploader](https://github.com/stefanfreitag/gradle_uploader/blob/master/.projenrc.js) - Uploads new Gradle versions to an S3 bucket.
- [wheatstalk/cdk-ecs-website](https://github.com/wheatstalk/cdk-ecs-website/blob/master/.projenrc.js) - Construct creates an ECS service following a shared ALB pattern.
- [hariohmprasath/scaled-test-execution](https://github.com/hariohmprasath/scaled-test-execution/blob/main/.projenrc.js) - Construct that creates scaling hub (scaled using fargate spot) with chrome and firefox nodes, that can help customers run integration and regression tests quicker and cheaper to improve the CI/CD process.
- [hariohmprasath/ecs-event-driven-scaling](https://github.com/hariohmprasath/ecs-event-driven-scaling/blob/master/.projenrc.js) - Construct that creates an autoscaling SQS consumer (Fargate based) deployed in container-based ecosystem using ECS.

### CdktfProviderProject

- [terraform-cdk-providers/cdktf-provider-aws](https://github.com/terraform-cdk-providers/cdktf-provider-aws/blob/master/.projenrc.js) - CDKTF AWS Provider.
- [terraform-cdk-providers/cdktf-provider-azurerm](https://github.com/terraform-cdk-providers/cdktf-provider-azurerm/blob/master/.projenrc.js) - CDKTF Azurerm Provider.
- [terraform-cdk-providers/cdktf-provider-docker](https://github.com/terraform-cdk-providers/cdktf-provider-docker/blob/master/.projenrc.js) - CDKTF Docker Provider.
- [terraform-cdk-providers/cdktf-provider-github](https://github.com/terraform-cdk-providers/cdktf-provider-github/blob/master/.projenrc.js) - CDKTF GitHub Provider.
- [terraform-cdk-providers/cdktf-provider-google](https://github.com/terraform-cdk-providers/cdktf-provider-google/blob/master/.projenrc.js) - CDKTF Google Provider.
- [terraform-cdk-providers/cdktf-provider-kubernetes](https://github.com/terraform-cdk-providers/cdktf-provider-kubernetes/blob/master/.projenrc.js) - CDKTF Kubernetes Provider.
- [terraform-cdk-providers/cdktf-provider-null](https://github.com/terraform-cdk-providers/cdktf-provider-null/blob/master/.projenrc.js) - CDKTF Null Provider.

### Subproject

- [cdk-appsync-react-demo](https://github.com/kcwinner/cdk-appsync-react-demo/blob/main/.projenrc.js)
