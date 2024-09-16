import { type SchemaTypeDefinition } from 'sanity'
import roomType from './roomType'
import bookingType from './bookingType'
import guestType from './guestType'
import userType from './userType'
import customerType from './customerType'
import staffType from './staffType'
import taxesType from './taxesType'
import contributorType from './contributorType'
import expensesTypes from './expensesTypes'
import objectifTypes from './objectifTypes'
import feedbackTypes from './feedbackTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [roomType,expensesTypes,bookingType,guestType,userType,customerType,staffType,taxesType,contributorType,objectifTypes,feedbackTypes],
}
