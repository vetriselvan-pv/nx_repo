export const clearCookies = document.cookie
  .split(';')
  .forEach((cookie) => document.cookie)
