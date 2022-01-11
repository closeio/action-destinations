// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * Value to identify the contact. Custom Field id is defined in the main integration settings.
   */
  external_cf_contact_id: string
  contact_name?: string
  contact_email?: string
  /**
   * Custom fields to set on the Contact. Key should be custom field id (`cf_xxxx`).
   */
  contact_custom_fields?: {
    [k: string]: unknown
  }
}
