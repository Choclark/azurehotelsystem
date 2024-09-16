import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'staff',
  title: 'Staff Details',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
    }),
    defineField({
      name: 'dateOfHire',
      title: 'Date of Hire',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'salary',
      title: 'Salary',
      type: 'string',
    }),
    defineField({
      name: 'leave',
      title: 'On Leave',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'holidays',
      title: 'On Holidays',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
