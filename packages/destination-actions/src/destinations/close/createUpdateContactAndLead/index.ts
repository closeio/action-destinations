import type { ActionDefinition } from '@segment/actions-core'
import type { Settings } from '../generated-types'
import type { Payload } from './generated-types'

const action: ActionDefinition<Settings, Payload> = {
  title: 'Create Update Contact and Lead',
  description: '',
  defaultSubscription: 'type = "identify"',
  fields: {
    external_cf_contact_id: {
      label: 'Contact Id Custom Field',
      description: 'Value to identify the contact. Custom Field id is defined in the main integration settings.',
      type: 'string',
      required: true,
      default: {
        '@path': '$.userId'
      }
    },
    contact_name: {
      label: 'Contact Name',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.name'
      }
    },
    contact_email: {
      label: 'Contact Email',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.email'
      }
    },
    contact_custom_fields: {
      label: 'Contact Custom Fields',
      description: 'Custom fields to set on the Contact. Key should be custom field id (`cf_xxxx`).',
      type: 'object'
    }
  },
  perform: (request, data) => {
    const settings = {
      contact_custom_field_id_for_user_id: data.settings.contact_custom_field_id_for_user_id
    }
    return request('https://services.close.com/webhooks/segment/create-update-contact-and-lead', {
      method: 'post',
      json: { action_payload: data.payload, settings }
    })
  }
}

export default action
