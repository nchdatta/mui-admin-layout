import { FC, useState } from 'react';
import { Controller, Control } from "react-hook-form";
import { FormControl, FormControlPropsSizeOverrides, FormHelperText, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Label from '../common/label';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { OverridableStringUnion } from '@mui/types';


type PasswordFieldProps = {
    name: string,
    control: Control<any, any>,
    value?: string | number,
    placeholder?: string,
    size?: OverridableStringUnion<'small' | 'medium', FormControlPropsSizeOverrides>,
    autoFocus?: boolean,
    errorMsg?: boolean,
    fontBold?: boolean,
    label?: any,
    required?: boolean
}


const PasswordField: FC<PasswordFieldProps> = ({ name = "", control, value = "", placeholder = "******", size = "small", autoFocus = false, errorMsg = false, fontBold = true, label, required = false }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (

        <>
            <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field, formState }: any) => (
                    <FormControl fullWidth variant="outlined" size={size}>
                        <Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />
                        <OutlinedInput
                            id={name}
                            type={showPassword ? 'text' : 'password'}
                            {...field}
                            autoFocus={autoFocus}
                            placeholder={placeholder}
                            error={!!formState.errors?.[name]}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <EyeOffIcon /> :
                                            <EyeIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
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

export default PasswordField;