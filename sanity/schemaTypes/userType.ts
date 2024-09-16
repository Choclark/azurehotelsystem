
// define the schema
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping options
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string', // Use string if you want to store ages with leading zeros; otherwise, use 'number'
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
    }),
  ],
});
