import React from 'react';
import PrismCode from 'react-prism';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ApiPage(props) {
  const {
    title,
    description,
    codeExample,
    children,
    parent,
    ...rest
  } = props;

  let parentLabel = null;
  switch (parent) {
    case "core":
      parentLabel = "react-ocean-forms";
      break;

    case "bootstrap":
      parentLabel = "react-ocean-forms-bootstrap";
      break;

    case "intl":
      parentLabel = "react-ocean-forms-react-intl";
      break;

    default:
      break;
  }

  const componentLink = title.replace(/(?!^)[A-Z]/g, (match) => `-${match}`).toLowerCase();

  return (
    <div className="component-page" {...rest}>
      <Breadcrumb>
        <BreadcrumbItem tag={Link} to="/api">API</BreadcrumbItem>
        <BreadcrumbItem tag={Link} to={`/api/${parent}`}>{parentLabel}</BreadcrumbItem>
        <BreadcrumbItem>{title}</BreadcrumbItem>
      </Breadcrumb>

      <h1>
        {title}
        {' '}<Link to={`/components/${parent}/${componentLink}`}>(go to Showcase)</Link>
      </h1>
      <p>{description}</p>
      <PrismCode className="lang-jsx" component="pre">{codeExample}</PrismCode>

      {children}
    </div>
  );
}

export default ApiPage;
