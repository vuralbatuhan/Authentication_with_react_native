export default function (errorCode){
    switch (errorCode) {
        case "auth/invalid-email":
            return 'Invalid e-mail'
        case "auth/user-not-found":
            return 'User not found'
        case "auth/wrond-password":
            return 'Wrong password'
        case "auth/email-already-exists":
            return 'User already exists'    
    
        default:
            return errorCode
    }    
}
