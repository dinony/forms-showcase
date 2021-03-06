import React from 'react';

import { ComponentPage } from '../shared/ComponentPage';
import { Showcase } from '../shared/Showcase';

import simpleCheckDemo from './examples/SimpleCheck';

import SimpleCheckJs from '!!raw-loader!./examples/SimpleCheck.js';

export const CheckPage = (): JSX.Element => {
  return (
    <ComponentPage
      title="Select"
      description="Defines a bootstrap form line containing a checkbox with the label as the checkbox
      text. Additionally it can render an info button and info alert as well as validation messages.
      If the user adds the required validator then it will mark the field as required as well."
      parent="bootstrap"
    >
      <Showcase
        title="Check"
        description="Showcase of a simple checkbox"
        component={simpleCheckDemo}
        code={SimpleCheckJs}
      />
    </ComponentPage>
  );
};
