(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{400:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(2),r=a(742),c=a(412),o=a.n(c),s=a(411),l=a.n(s),m=a(413),i=a.n(m);r.a.registerLanguage("jsx",l.a),r.a.registerLanguage("bash",o.a);var u=function(e){var t=e.code,a=e.language,c=void 0===a?"jsx":a;return n.createElement(r.a,{language:c,style:i.a},t)}},455:function(e,t){e.exports="import React from 'react';\nimport { Form, Input } from 'react-ocean-forms';\n\nclass GettingStarted extends React.Component {\n  handleSubmit(values) {\n    console.log('form submitted with', values);\n  }\n\n  render() {\n    return (\n      <Form onSubmit={this.handleSubmit}>\n        <Input name=\"myInput\" label=\"Example input\" />\n        <button type=\"submit\">Submit</button>\n      </Form>\n    );\n  }\n}\n\nexport default GettingStarted;\n"},743:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(387),o=a(16),s=a(18),l=a(1),m=a.n(l),i=a(19),u=a.n(i),p=a(5),g={tag:p.h,fluid:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=e.fluid,l=Object(s.a)(e,["className","cssModule","tag","fluid"]),m=Object(p.e)(u()(t,"jumbotron",!!c&&"jumbotron-fluid"),a);return r.a.createElement(n,Object(o.a)({},l,{className:m}))};h.propTypes=g,h.defaultProps={tag:"div"};var d=h,f=a(400),b=a(455),E=a.n(b),v=function(){return n.createElement("div",{className:"page"},n.createElement(d,null,n.createElement("h1",{className:"display-4"},"react-ocean-forms"),n.createElement("p",{className:"lead"},"Flexible and lightweight framework for rendering and validating forms with React."),n.createElement("hr",null),n.createElement("p",null,n.createElement("a",{href:"https://www.npmjs.com/package/react-ocean-forms"},n.createElement("img",{src:"https://img.shields.io/npm/v/react-ocean-forms.svg",alt:"Npm version"}))," ",n.createElement("a",{href:"https://github.com/environment-agency-austria/react-ocean-forms/blob/master/LICENSE"},n.createElement("img",{src:"https://img.shields.io/github/license/environment-agency-austria/react-ocean-forms.svg",alt:"License"})))),n.createElement("h2",null,"Installation"),n.createElement("p",null,"with npm:"),n.createElement(f.a,{code:"npm install --save-dev react-ocean-forms",language:"bash"}),n.createElement("p",null,"or with yarn:"),n.createElement(f.a,{code:"yarn add --dev react-ocean-forms",language:"bash"}),n.createElement("h4",{className:"mt-4"},"Optional packages"),n.createElement("p",null,"The ",n.createElement("a",{href:"https://github.com/environment-agency-austria/react-ocean-forms"},"react-ocean-forms")," package is the core package. While you can use it on it's own, we highly recommend adding the ",n.createElement("a",{href:"https://github.com/environment-agency-austria/react-ocean-forms-bootstrap"},"react-ocean-forms-bootstrap")," package as well. It offers you easy bootstrap (reactstrap) integration."),n.createElement("p",null,"If you're using react-intl in your project, add the ",n.createElement("a",{href:"https://github.com/environment-agency-austria/react-ocean-forms-react-intl"},"react-ocean-forms-react-intl")," package for react-intl support."),n.createElement("h2",{className:"mt-4"},"Getting started"),n.createElement("p",null,"Assuming that you already have an up and running React app, otherwise please follow the ",n.createElement("a",{href:"https://github.com/facebook/create-react-app#creating-an-app"},"create-react-app")," guideline."),n.createElement("p",null,"After adding the react-ocean-forms package(s) to your project, you can simply import the components you need."),n.createElement(f.a,{code:E.a}),n.createElement("p",null,"For further documentation head to the ",n.createElement(c.a,{to:"/components"},"components")," section."))},y=v;a.d(t,"Home",function(){return v}),a.d(t,"AsyncPage",function(){return y})}}]);
//# sourceMappingURL=157.243d1110.chunk.js.map