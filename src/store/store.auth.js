import { makeAuthPlugin } from './feathersVuex.js'

export default makeAuthPlugin({ userService: 'users' })