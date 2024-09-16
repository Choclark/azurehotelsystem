import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'cardData',
  title: 'Card Data',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'The FontAwesome icon class',
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
      description: 'The numerical amount for the card (e.g., number of rooms)',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the card (e.g., Rooms)',
    }),
    defineField({
      name: 'percentage',
      title: 'Percentage',
      type: 'number',
      description: 'The percentage value for the card',
    }),
    defineField({
      name: 'difference',
      title: 'Difference',
      type: 'number',
      description: 'The difference value for the card',
    })
  ]
});
