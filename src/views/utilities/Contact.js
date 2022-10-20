// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { Grid, Input, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
// ==============================|| TYPOGRAPHY ||============================== //
const Contact = () => {
    const customization = useSelector((state) => state.customization);
    return (
        <MainCard title="Contact" secondary={<SecondaryAction link="https://github.com/peekok" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={14}>
                    <MuiTypography textAlign={'center'} variant="h3">
                        {`Leave a message, I'll get back to you as soon as possible!`}
                    </MuiTypography>
                    <Input
                        style={{ margin: '30px', width: '100%', maxWidth: '-webkit-fill-available', height: 'auto' }}
                        placeholder="Name"
                    />
                    <Input
                        style={{ margin: '30px', width: '100%', maxWidth: '-webkit-fill-available', height: 'auto' }}
                        placeholder="Email"
                    />
                    <Input
                        style={{ margin: '30px', width: '100%', maxWidth: '-webkit-fill-available', height: 'auto' }}
                        placeholder="Message"
                    />
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
                            onClick={() => {}}
                        >
                            <ListItemIcon>
                                <SendIcon stroke={1.5} size="1.3rem" />
                            </ListItemIcon>
                            <ListItemText primary={<MuiTypography variant="body2">Send</MuiTypography>} />
                        </ListItemButton>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default Contact;
