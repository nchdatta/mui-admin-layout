import { Button, CircularProgress, Grid, Paper, Stack } from '@mui/material';
import { FC } from 'react';
import { ArrowLeft, Plus, PanelTopClose } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type BtnContainerProps = {
    gap?: number,
    justifyContent?: string
}

type AddFormProps = {
    handleSubmit?: (e?: any) => any,
    handleSubmitForm?: () => void,
    handleBack?: () => void,
    maxWidth?: string | number,
    minHeight?: string | number,
    submitBtnText?: string,
    backBtnText?: string,
    backBtnIcon?: string,
    btnContainerProps?: BtnContainerProps,
    isLoading?: boolean,
    py?: number,
    gridMy?: number,
    gradient?: boolean,
    children: any
}

const AddForm: FC<AddFormProps> = ({ handleSubmit, handleSubmitForm, handleBack, maxWidth = 500, minHeight = '70vh', submitBtnText = "Submit", backBtnText = "Back", backBtnIcon = 'back', btnContainerProps = { justifyContent: 'space-between', gap: 2 }, isLoading = false, py = 3, gridMy = 5, gradient = true, children }) => {
    const navigate = useNavigate();
    let childrens = [];
    if (!children.length) {
        childrens.push(children)
    } else {
        childrens = [...children];
    }

    const childrenProps = childrens.filter((child: any) => child !== false && child !== undefined && child !== null);


    return (
        <Paper elevation={0} sx={{ px: 2, py: py, minHeight }} className={gradient ? "rad-grad" : ''}>
            <form onSubmit={handleSubmitForm ? handleSubmitForm : handleSubmit}>
                <Grid container gap={2} maxWidth={{ md: maxWidth }} sx={{ margin: "1rem auto" }} alignItems="center" justifyContent="center">
                    {childrenProps?.map((item: any, i: number) => <Grid item xs={12} key={i}>{item} </Grid>)}

                    <Grid container spacing={btnContainerProps.gap} justifyContent={btnContainerProps.justifyContent} sx={{ my: gridMy }}>
                        <Grid item xs={6} md={3}>
                            <Button variant="outlined" onClick={() => handleBack ? handleBack() : navigate(-1)} color={'warning'} size='large' fullWidth >
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    {backBtnIcon === 'back' ? <ArrowLeft size={20} /> : <PanelTopClose size={20} />} {backBtnText}
                                </Stack>
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Button variant="contained" disabled={isLoading} type="submit" color="primary" size='large' fullWidth>
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    {submitBtnText}
                                    {isLoading ? <CircularProgress size={18} /> : <Plus size={20} />}
                                </Stack>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default AddForm;