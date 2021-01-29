import React, { InputHTMLAttributes } from 'react';

import { InputBase } from '../../../styles/components/Input/styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => (
  <InputBase {...rest} />
);

export default Input;
