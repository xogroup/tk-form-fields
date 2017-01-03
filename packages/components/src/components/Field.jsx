import React from 'react';
import humanize from 'humanize-string';
import styles from '@union/field-styles';

export default function Field({
  name,
  validationMessage,
  label = humanize(name),
  invalid = false,
  ...props
}) {
  const id = name + Date.now();
  let inputClass = styles.field ;

  if (invalid) {
    inputClass = styles.invalidField;
  }

  return (
    <div className={styles.fieldContainer}>
      <input className={inputClass} id={id} name={name} {...props} placeholder=" " />
      <label className={styles.fieldLabel} htmlFor={id} > { label } </label>
      <div className={styles.requirements}>{validationMessage}</div>
    </div>
  );
}
