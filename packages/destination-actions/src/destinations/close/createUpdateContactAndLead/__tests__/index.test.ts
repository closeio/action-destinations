// import nock from 'nock'
import { createTestEvent, createTestIntegration } from '@segment/actions-core'
import Destination from '../../index'
import dayjs from '../../../../lib/dayjs'
import { Settings } from '../../generated-types'

const testDestination = createTestIntegration(Destination)

describe('Close.createUpdateContactAndLead', () => {
  it('should work with default mappings when userId is supplied', async () => {
    // TODO copy of test to have something now
    const userId = 'abc123'
    const anonymousId = 'unknown_123'
    const timestamp = dayjs.utc().toISOString()
    const birthdate = dayjs.utc('1990-01-01T00:00:00Z').toISOString()
    const traits = {
      full_name: 'Test User',
      email: 'test@example.com',
      created_at: timestamp,
      person: {
        over18: true,
        identification: 'valid',
        birthdate
      }
    }
    const event = createTestEvent({
      userId,
      anonymousId,
      timestamp,
      traits
    })
    const settings: Settings = {
      api_key: 'api_xxxx'
    }
    const mapping = {
      contact_custom_fields: {
        cf_oiiouhwedf: {
          '@path': '$.userId'
        }
      }
    }
    const responses = await testDestination.testAction('createUpdateContactAndLead', {
      event,
      settings,
      mapping,
      useDefaultMappings: true
    })
    console.log(responses)
  })
})
