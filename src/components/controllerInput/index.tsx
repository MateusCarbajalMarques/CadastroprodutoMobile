import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Input';

import { Error } from './styles';

type Props = InputProps & {
    control: Control<any>;
    name: string;
    error?: FieldError
}

export function ControllerInput({ control, name, error, ...rest }: Props) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />
            {
                error && <Error>{error.message}</Error>
            }
        </>
    )
}