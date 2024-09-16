import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'feedback',
  title: 'FeedBacks',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The numerical amount for the card (e.g., number of rooms)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The name of the card (e.g., Rooms)',
    }),
    defineField({
        name: 'profilePic',
        title: 'Profile Picture',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping options
        },
      }),
  ]
});
