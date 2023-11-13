import { Breadcrumbs, Button, Stack, Typography } from '@mui/material';
import { Plus , HomeIcon} from 'lucide-react'; 
import { NavLink, useNavigate } from 'react-router-dom';

const PageHeader = ({ btn = true, btnText = "Add New", handleBtn, navigate = '/dashboard', title = "Title", subTitle = "", breadcrumbLinks, currentPage, mb = 3 }) => {
    const nv = useNavigate();

    return (
        <Stack direction="row" justifyContent={"space-between"} alignItems={{ xs: "flex-end", md: "center" }} mb={mb}>
            <Stack >
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink
                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#2E86C1' }}
                        to="/dashboard"  >
                        <HomeIcon />
                        Dashboard
                    </NavLink>
                    {breadcrumbLinks && breadcrumbLinks?.map((link:{href: string, label: string}, i:number) => (
                        <NavLink key={i}
                            style={{ fontSize: '0.9rem', color: "GrayText" }}
                            to={link.href}
                        >{link.label} </NavLink>
                    ))}
                    {currentPage && <Typography sx={{ fontSize: '0.9rem', color: "#566573" }}>{currentPage} </Typography>}
                </Breadcrumbs>
                <Typography variant="h5" fontSize={'1.4rem'} fontWeight={"bold"} color={"#34495E"}>{title} {subTitle && <span style={{ fontSize: "1rem", fontWeight: "normal" }}> - {subTitle}</span>} </Typography>
            </Stack>


            {btn && <Button variant="contained" onClick={() => handleBtn ? handleBtn() : nv(navigate)}>
                <Stack direction="row" alignItems={"center"} gap={1}>
                    <Plus color='#F0F3F4' />
                    <Typography sx={{ textTransform: "capitalize" }} fontWeight={"medium"}>{btnText}</Typography>
                </Stack>
            </Button>}
        </Stack>
    );
};

export default PageHeader;