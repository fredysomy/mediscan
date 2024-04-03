// eslint-disable-next-line no-undef
import admin from 'firebase-admin';
// Load your service account key

 let credentials={
        "type": "service_account",
        "project_id": "sdfdsf-7a11a",
        "private_key_id": "121a9c4d58a1bfcd6178c0644e212afbbbef548d",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC6v/cM5/DN7sYX\nGbZ0/mn8silgOAqlbMolprGusROEQmeLJptGeWuSbhZLocV/QvFpv0R/y+HuOAkd\nOhmQgiZUUu5mCrHow0dDaDGXTh14HgWM8IRXCjkyUNR7evgMtX5RDqDnxYua6BIf\n+dhRlCc8fPBJ6VcAaR9WWggWViQjlPGv6MQDVD2TBmMVXmDqTuLoc7uisZ6DfEdS\nsUyj793NFZmuEoj+GrrbW2QUoTB+8rLATy5vudPBguoNFk0sOg2lkLFoF90ZHead\n0zqCy5fNkcKdqspM85f2iEqLuLDzbIfgjTbjcVX/kG97FqcMbAVkvaiERjAZIjz3\nO4+sn1LrAgMBAAECggEAQ/W+6H3xlmeJw/dR/EJnfJOzVfYe/bNY3xnJ+HotUYi+\n2Jc8k4l1Oa0BRRXCYv0QEH0P5vfhqMjQnEe77OhIHZCufAjxVHTYFrIwtdCyDbfT\nKkaOyoQIa4SZxrPp1+omZUYPDTlJBB7nFabc71ccbjlDUoptZFNdGZYa8lH3xdB7\nfHdePeLXXDJ7QWzCZlRIMS+KiQimuKCdxq4GwM35zanpiZIp96sZ5mPwyh8J1idR\nYdlRAFwqPm8mtRhkTiko4GBElwQ6yBrBnLdW8uBGGgwDpT8rFYRgqqEMc+K0N4gT\nGsL2yBUVnoBm7MTX9k9QQZkRFcmlOq5SbqqmEWbn2QKBgQDcZLyWS51vxfEcOJXU\n7GVjnzh5xAqXbhJaJLDYbwaOh7fAAqFZ5MjiP9mpRmweyB4EC3NCY+eh6c5ZdoYV\nun3y3gxKfrlMoHvwxXc/t6RFdqoOeINuvoCMHhQ5c10uYfl77Q3iXmRXVM352bMQ\nEWDTci4LWjaCHhESerJEx0Fw0wKBgQDY68KC1dlM3pjoeAX8Edk4CiU308mkWtqG\n5dbgaDDDu633bglHVojr4sFXuu+wyifZUu5M3AE5eTA8G+00wp2dRZ5Qbn0e6xKS\n0xLFrJYR10bf20CW9M8cEIJf0Z/NyhLIbOtd/1FMXS9XI4OfcrbBbJY1Pq8h9pXH\nFafWxRcGiQKBgHt9ElIgQjGrtmJ6rjFk15aPU0Se/NRGf4/0uQY8h277SpESqDfH\nQmvLHPmFFPXWaUMY61cKxXHqoI1uJMkt+n5HvplLEiaGUYviCOQx0KB/Ud/T1MkL\ngtl/zRM3ucFQckrm033AJ/bq9JKHUZayNg+kDXqc7KfRkv1ItHRnNRqzAn8sD7dy\n2/1Hn+9vSPHuQbHdsDHfJSXQPKQmwojjDEbbe0Pa/n7j/q/ROj4Lk+0b+/QcMLw2\n4HlfMz6Y9xM3pFBfocSGkerYXOdo63bksCnLde7viZmVECUBjljtHadYJbOrAnTM\now/gcw0qpgwWVzbIE0ZvikwImg3SYpO1DFOhAoGBALrz9NasQ4iCAtv6pBXQacSK\n9YAlJqTHWzsiWNeIsMUcnOvBVUWewN/tsowykkkwj88cM6rKQ515qr78NnpbPhDa\nCDF5Ys5B2NVAuuGu0pKastS57WftA3C/JTX6T94ozoa4xwn+lj62ZFzxHgLiw2NW\n2h64PPWRThqdAxJLg+Zx\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-698of@sdfdsf-7a11a.iam.gserviceaccount.com",
        "client_id": "101409464661007007342",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-698of%40sdfdsf-7a11a.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }

admin.initializeApp({
    credential:admin.credential.cert(credentials)})
let token="eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNjI1OTZmNTJmNTJlZDQ0MDQ5Mzk2YmU3ZGYzNGQyYzY0ZjQ1M2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRnJlZHkgU29teSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJdHF0NE8wRG16bk9CVnZCVzh6MG5QSGVXUmVIZEM4VDVXc09qa3RVWFp1dzA9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2RmZHNmLTdhMTFhIiwiYXVkIjoic2RmZHNmLTdhMTFhIiwiYXV0aF90aW1lIjoxNzEyMTQxMTc5LCJ1c2VyX2lkIjoiS0daNTczbkdDc1dDZnRlOHA1MUdaMDE2WXpMMiIsInN1YiI6IktHWjU3M25HQ3NXQ2Z0ZThwNTFHWjAxNll6TDIiLCJpYXQiOjE3MTIxNDc3ODIsImV4cCI6MTcxMjE1MTM4MiwiZW1haWwiOiJmcmVkeXNvbXlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTQ4Nzg2NTI3MzI5NTI0OTk5MjAiXSwiZW1haWwiOlsiZnJlZHlzb215QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.nbwn0pd5AT8diuEgMR4rS88uqhD2bSxdkKNCu3Wx9yXX_ah7gugzfjGtn1zVMVVCWKUsxT2LftpLH9ts5M66kEX3O-Ks2yeNunOZJDl8i829zn0hdeSgjp_ApY12-x_Uog8y5HW_CUe_8Sv-LtON7aOuWQzl8Rn0z8zzwvq6BfCuHoodw0WuVWARBmxupu5cvCaPjH13B21h8yl5YbjMMRM_qZrxoIFLFXE8cBUd5dHbbr45QOyoai-KYL3Fgdzcvb3x3hs-8ylFpgKtv_DM8vkbSH8G7iF0JSHNqKdtxL10e7ZeUJahcjowZvb6q04ontX60Nv03ejU1XNs4tWgNA"


admin.auth()
  .verifyIdToken(token)
  .then((decodedToken) => {
   console.log(decodedToken)
    // ...
  })
  .catch((error) => {
    // Handle error
    console.log(error)
  });