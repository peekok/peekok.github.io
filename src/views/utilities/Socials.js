// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { Grid, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// ==============================|| TYPOGRAPHY ||============================== //
const Socials = () => {
    const customization = useSelector((state) => state.customization);
    return (
        <MainCard title="Socials" secondary={<SecondaryAction link="https://github.com/peekok" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={14}>
                    <ListItemButton
                        sx={{
                            borderRadius: `${customization.borderRadius}px`
                        }}
                        onClick={() => {
                            window.location.href = 'https://twitter.com/j4y_3';
                        }}
                    >
                        <ListItemIcon>
                            <TwitterIcon stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<MuiTypography variant="body2">Twitter</MuiTypography>} />
                    </ListItemButton>
                    <ListItemButton
                        sx={{
                            borderRadius: `${customization.borderRadius}px`
                        }}
                        onClick={() => {
                            window.location.href = 'https://linkedin.com/in/abdulrahman-al-suhimi-x';
                        }}
                    >
                        <ListItemIcon>
                            <LinkedInIcon stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<MuiTypography variant="body2">Linkedin</MuiTypography>} />
                    </ListItemButton>
                    <ListItemButton
                        sx={{
                            borderRadius: `${customization.borderRadius}px`
                        }}
                        onClick={() => {
                            window.location.href = 'https://github.com/peekok';
                        }}
                    >
                        <ListItemIcon>
                            <GitHubIcon stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<MuiTypography variant="body2">Github</MuiTypography>} />
                    </ListItemButton>
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default Socials;
