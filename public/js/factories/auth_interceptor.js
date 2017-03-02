function AuthInterceptor(AuthTokenFactory) {
  return {
    request: addToken
  }
}
