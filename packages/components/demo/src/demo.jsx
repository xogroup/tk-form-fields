import React from 'react';
import {
  Field,
  Group,
  Textarea,
  TextareaWithoutLabel,
  Dropdown,
  DropdownItem
} from 'components';

export default function Demo() {
  return (
    <div style={{maxWidth: '500px'}}>
      <Group>
        <Field name="email" />
      </Group>

      <Group>
        <Field name="email-2" defaultValue="myemail@email.com" />
      </Group>

      <Group>
        <Field name="email-3" disabled="true" />
      </Group>

      <Group>
        <Field name="email-4" invalid="true" validationMessage="Field is invalid" />
      </Group>

      <Group>
        <Textarea name="textarea-1" defaultValue="Hello there" />
      </Group>

      <Group>
        <TextareaWithoutLabel name="textarea-1" placeholder="A really long note" />
      </Group>

      <Group>
        <Dropdown name="dropdown" value="test-1">
          <DropdownItem label="test" />
          <DropdownItem label="test-1" />
        </Dropdown>
      </Group>
    </div>
  )
}
