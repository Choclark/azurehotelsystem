import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'customerObjective',
      title: 'Customer Objective',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'bookingObjective',
      title: 'Booking Objective',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'roomsObjective',
      title: 'Room Objective',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'employeeObjective',
      title: 'Employee Objective',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'revenueObjective',
      title: 'Revenue Objective',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
});
