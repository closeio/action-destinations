import type { DestinationDefinition } from '@segment/actions-core'
import type { Settings } from './generated-types'

const destination: DestinationDefinition<Settings> = {
  name: 'Close',
  slug: 'close',
  mode: 'cloud',

  authentication: {
    scheme: 'basic',
    fields: {
      apiKey: {
        label: 'Api key',
        description: 'Your Close api key.',
        type: 'string',
        required: true
      }
    },
    testAuthentication: (request) => {
      return request(`https://api.close.com/api/v1/me/`)
    }
  },

  extendRequest({ settings }) {
    return {
      username: settings.apiKey,
      password: '' // Blank password https://developer.close.com/topics/authentication/
    }
  },

  // onDelete: async (request, { settings, payload }) => {
  //   // Return a request that performs a GDPR delete for the provided Segment userId or anonymousId
  //   // provided in the payload. If your destination does not support GDPR deletion you should not
  //   // implement this function and should remove it completely.
  // },

  actions: {}
}

export default destination
