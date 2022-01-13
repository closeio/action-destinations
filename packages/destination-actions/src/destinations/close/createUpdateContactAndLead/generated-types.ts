// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  lead_name?: string
  contact_name?: string
  contact_email?: string
  contact_phone?: string
  contact_url?: string
  contact_title?: string
  /**
   * Your id that identifies the Contact. Contact Custom Field Id must be defined in the global integration settings.
   */
  contact_external_id?: string
  /**
   * Custom fields to set on the Contact. Key should be custom field id (`cf_xxxx`).
   */
  contact_custom_fields?: {
    [k: string]: unknown
  }
}
