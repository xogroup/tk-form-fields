import React from 'react';
import { locals as styles } from '@union/field-styles';

export default function Group({ children, ...props }) {
  return (
    <div className={styles.group} {...props}>
      {children}
    </div>
  );
}
