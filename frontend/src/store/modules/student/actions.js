export function signUpRequest(name, email, age, weight, height) {
  return {
    type: '@student/SIGN_UP_REQUEST',
    payload1: {name, email, age, weight, height },
  }
}

