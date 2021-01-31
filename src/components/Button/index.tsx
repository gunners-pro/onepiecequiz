import React, { ButtonHTMLAttributes } from 'react';

import { ButtonBase } from '../../../styles/components/Button/styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...rest }) => <ButtonBase {...rest} />;

export default Button;
