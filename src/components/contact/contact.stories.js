// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import Contact from './contact'

storiesOf('Components/Shared Components', module).add(
  'Contact Block (Minimal)',
  () => {
    return (
      <Contact
        title="Get in touch about your project"
        emailAddress="will@torchbox.com"
        phoneNumber="+44 (0) 7545 468483"
      />
    )
  }
)
