import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import inputTypesDemo from './examples/InputTypes';
import plaintextDemo from './examples/PlainTextInput';
import prefixSuffixDemo from './examples/InputPrefixSuffix';

const inputTypes = require('!!raw-loader!./examples/InputTypes.js'); // eslint-disable-line
const plainText = require('!!raw-loader!./examples/PlainTextInput.js'); // eslint-disable-line
const prefixSuffix = require('!!raw-loader!./examples/InputPrefixSuffix.js'); // eslint-disable-line

function InputPage() {
  return (
    <ComponentPage
      title="Input"
      description="Defines a bootstrap form line containing a label and an input. Additionally it can
      render an info button and info alert as well as validation messages. If the user adds the required
      validator then it will mark the field as required as well."
      parent="bootstrap"
    >
      <Showcase
        title="Bootstrap input"
        description="Showcase of the bootstrap input"
        component={inputTypesDemo}
        code={inputTypes}
      />

      <Showcase
        title="Prefix and suffix"
        description="Bootstraps prefix and suffix are also supported."
        component={prefixSuffixDemo}
        code={prefixSuffix}
      />

      <Showcase
        title="Plaintext mode"
        description="All inputs from this package support the plaintext mode as well."
        component={plaintextDemo}
        code={plainText}
      />
    </ComponentPage>
  );
}

export default InputPage;
