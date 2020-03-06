import feathersVuex from 'feathers-vuex'
import feathersClient from '../feathers-client'

const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models,
  FeathersVuex
} = feathersVuex(
  feathersClient,
  {
    idField: '_id', // Must match the id field in your database table/collection
    whitelist: ['$regex', '$options']
  }
)

export { makeAuthPlugin, makeServicePlugin, BaseModel, models, FeathersVuex }