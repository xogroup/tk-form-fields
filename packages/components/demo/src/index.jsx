import React from 'react';
import ReactDOM from 'react-dom';
import { Field, Group } from 'components';

function Demo() {
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
    </div>
  )
}

class DemoDom {
  constructor() {
    this.container = document.createElement('div');
    this.container.id = "demo";
  }

  mount() {
    document.body.appendChild(this.container);
    return this.container
  }
}

const demo = new DemoDom();

ReactDOM.render(
  <Demo />,
  demo.mount()
)
