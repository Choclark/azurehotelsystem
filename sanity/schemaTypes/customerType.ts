import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(15),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image', // Image field for picture
      options: {
        hotspot: true, // Enable image cropping
      },
    }),
    defineField({
      name: 'birthday',
      title: 'Birthday',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'favoriteAmenities',
      title: 'Favorite Amenities',
      type: 'string',
    }),
    defineField({
      name: 'roomPreferences',
      title: 'Room Preferences',
      type: 'string',
    }),
    defineField({
      name: 'Nationality',
      title: 'Nationality',
      type: 'string',
    }),
  ],
});
