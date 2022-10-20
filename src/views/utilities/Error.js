// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { Grid, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// ==============================|| TYPOGRAPHY ||============================== //

const Error = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const navigate = useNavigate();
    return (
        <MainCard title="Are you lost child?" secondary={<SecondaryAction link="https://github.com/peekok" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={14}>
                    <MuiTypography
                        variant="h1"
                        style={{
                            fontSize: 100,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '-webkit-fill-available',
                            maxWidth: 'fit-content'
                        }}
                    >
                        404
                    </MuiTypography>
                    <MuiTypography
                        sx={{ color: 'text.secondary' }}
                        variant="body1"
                        color={theme.palette.text.primary}
                        padding={3}
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '-webkit-fill-available',
                            maxWidth: 'fit-content'
                        }}
                    >
                        {`You've Reached the end of the world...`}
                    </MuiTypography>
                    <Grid
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '-webkit-fill-available',
                            maxWidth: 'fit-content'
                        }}
                    >
                        <ListItemButton
                            sx={{
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            <ListItemIcon>
                                <FlightTakeoffIcon stroke={1.5} size="1.3rem" />
                            </ListItemIcon>
                            <ListItemText primary={<MuiTypography variant="body2">Send me back flying</MuiTypography>} />
                        </ListItemButton>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Error;
