import React from 'react';

import ComponentPage from '../shared/ComponentPage';
import Showcase from '../shared/Showcase';

import simpleFormDemo from './examples/SimpleForm';
import defaultValuesDemo from './examples/DefaultValues';
import valuesDemo from './examples/FormValues';
import formValidationDemo from './examples/FormValidation';
import disabledDemo from './examples/DisabledForm';
import plaintextDemo from './examples/PlaintextForm';

const defaultValues = require('!!raw-loader!./examples/DefaultValues.js'); // eslint-disable-line
const values = require('!!raw-loader!./examples/FormValues.js'); // eslint-disable-line
const simpleForm = require('!!raw-loader!./examples/SimpleForm.js'); // eslint-disable-line
const formValidation = require('!!raw-loader!./examples/FormValidation.js'); // eslint-disable-line
const disabled = require('!!raw-loader!./examples/DisabledForm.js'); // eslint-disable-line
const plaintext = require('!!raw-loader!./examples/PlaintextForm.js'); // eslint-disable-line

function FormPage() {
  return (
    <ComponentPage
      title="Form"
      description="The form is the main component. It glues together all the
      Form logic through React's new Context api."
      parent="core"
    >
      <Showcase
        title="Simple form"
        description="Showcase of a simple form"
        component={simpleFormDemo}
        code={simpleForm}
      />

      <Showcase
        title="Default values"
        description="Provide the form with default values that should be displayed on load.
        Note how the default value won't update the Field, if the user changed the input.
        However, on form reset the default value will be used again."
        component={defaultValuesDemo}
        code={defaultValues}
      />

      <Showcase
        title="Values"
        description="Override the values of the form fields. Changing those values will override
        the Field value, even if the user changed it."
        component={valuesDemo}
        code={values}
      />

      <Showcase
        title="Disabled form"
        description="Setting the disabled prop will disable all form fields."
        component={disabledDemo}
        code={disabled}
      />

      <Showcase
        title="Plaintext form"
        description="Setting the plaintext prop will show all form fields in a text-only mode."
        component={plaintextDemo}
        code={plaintext}
      />

      <Showcase
        title="Form-wide validation"
        description="Use a form-wide validation function before submit. Notice that
        the onSubmit callback is not invoked if you type 'bad' into the input."
        component={formValidationDemo}
        code={formValidation}
      />
    </ComponentPage>
  );
}

export default FormPage;
