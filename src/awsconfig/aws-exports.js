const awsConfig = {
    Auth: {
        Cognito: {
            region: 'ap-southeast-1',         // e.g., 'us-east-1'
            userPoolId: 'ap-southeast-1_6JpwGjOft',       // e.g., 'us-east-1_XXXXXXXXX'
            userPoolClientId: '3m111lgd8dvuos0kdhij5vj510', // e.g., 'XXXXXXXXXXXXXXXXXXX'
            signUpVerficationMethod: 'code' // e.g., 'code'
        }
    }
  };
  
  export default awsConfig;
  