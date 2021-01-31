import React, { FormHTMLAttributes } from 'react';

import { Form } from '../../../styles/components/AlternativeForms/styles';

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const AlternativesForm: React.FC<FormProps> = ({ ...rest }) => <Form {...rest} />;

export default AlternativesForm;
