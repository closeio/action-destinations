import type { ActionDefinition } from '@segment/actions-core'
import type { Settings } from '../generated-types'
import type { Payload } from './generated-types'

const action: ActionDefinition<Settings, Payload> = {
  title: 'Create Update Contact and Lead',
  description: '',
  defaultSubscription: 'type = "identify"',
  fields: {
    lead_name: {
      label: 'Lead Name',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.traits.company.name'
      }
    },
    contact_name: {
      label: 'Contact Name',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.traits.name'
      }
    },
    contact_email: {
      label: 'Contact Email',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.traits.email'
      }
    },
    contact_phone: {
      label: 'Contact Phone',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.traits.phone'
      }
    },
    contact_url: {
      label: 'Contact Url',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.traits.website'
      }
    },
    contact_title: {
      label: 'Contact Title',
      description: '',
      type: 'string',
      required: false,
      default: {
        '@path': '$.traits.title'
      }
    },
    contact_external_id: {
      label: 'Contact External Id',
      description:
        'Your id that identifies the Contact. Contact Custom Field Id must be defined in the global integration settings.',
      type: 'string',
      required: false,
      default: {
        '@path': '$.userId'
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
    return request('https://services.close.com/webhooks/segment/actions/create-update-contact-and-lead', {
      method: 'post',
      json: { action_payload: data.payload, settings }
    })
  }
}

export default action
