import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'myInsta',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: 'myinsta',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
