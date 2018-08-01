import React from 'react';
import { Link } from 'react-router-dom';

import ApiPage from '../shared/ApiPage';

const introExample = require('!!raw-loader!./examples/IntlForm.js'); // eslint-disable-line

function FieldPage() {
  return (
    <ApiPage
      title="IntlForm"
      description="Drop-in replacement for regular Form component. Enables react-intl support.
      Must live inside a IntlProvider."
      codeExample={introExample}
      parent="intl"
    >
      <h2>Properties</h2>
      <p>See <Link to="../../core/form">Form</Link> for properties.</p>

      <h2>Events</h2>
      <p>See <Link to="../../core/form">Form</Link> for event handling.</p>
    </ApiPage>
  );
}

export default FieldPage;
