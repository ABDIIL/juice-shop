/* Rate limiting */
  app.enable('trust proxy')
  app.use('/rest/user/reset-password', rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    keyGenerator ({ headers, ip }) { return headers['Forwarded'] ?? ip }
  }))