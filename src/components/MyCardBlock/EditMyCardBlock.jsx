import React from 'react'
import { TextControl, ToggleControl, PanelBody } from '@wordpress/components'

export function EditMyCardBlock({ attributes, setAttributes }) {
  const { title, content, showCta } = attributes

  return (
    <PanelBody title="Card Content" initialOpen={true}>
      <TextControl
        label="Title"
        value={title}
        onChange={(value) => setAttributes({ ...attributes, title: value })}
        help="Enter the main heading for the card."
      />
      <TextControl
        label="Content"
        value={content}
        onChange={(value) => setAttributes({ ...attributes, content: value })}
        help="Enter the body text for the card."
      />
      <ToggleControl
        label="Show Button"
        checked={showCta}
        onChange={(value) => setAttributes({ ...attributes, showCta: value })}
        help={showCta ? 'Button is visible.' : 'Button is hidden.'}
      />
    </PanelBody>
  )
}