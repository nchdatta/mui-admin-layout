import { FC, MouseEventHandler, ChangeEvent } from 'react';
import { Control, Controller } from "react-hook-form";
import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import Label from '../common/label';

type TextInputProps = {
    name: string,
    type?: string,
    control: Control<any, any>,
    value?: string | number,
    placeholder?: string,
    size?: 'small' | 'medium' | undefined,
    autoFocus?: boolean,
    handleChange?: (value: any) => void,
    handleClick?: MouseEventHandler<HTMLDivElement> | undefined,
    min?: number,
    max?: number,
    step?: number,
    errorMsg?: boolean,
    fontBold?: boolean,
    label?: any,
    required?: boolean,
    disabled?: boolean,
    readOnly?: boolean
}

const TextInput: FC<TextInputProps> = ({ name = "", type = "text", control, value = "", placeholder = "", size = "small", autoFocus = false, handleChange, handleClick = undefined, min, max, step = null, errorMsg = false, fontBold = true, label, required = false, disabled = false, readOnly = false }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field, formState }: any) => (
                    <FormControl fullWidth variant="outlined" size={size}>
                        {label && < Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />}
                        <OutlinedInput
                            {...field}
                            type={type}
                            onClick={handleClick}
                            autoFocus={autoFocus}
                            inputProps={{ min, max, step }}
                            placeholder={placeholder}
                            error={!!formState.errors?.[name]}
                            disabled={disabled}
                            readOnly={readOnly}
                            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                                field.onChange(e.currentTarget.value);
                                handleChange && handleChange(e.currentTarget.value);
                            }}
                            sx={{ bgcolor: disabled ? "#f3f6f4" : '' }}
                        />
                        {errorMsg && !!formState.errors?.[name] &&
                            <FormHelperText
                                error>{formState?.errors?.[name].message}</FormHelperText>}

                    </FormControl>
                )}
            />
        </>
    );
};

export default TextInput;