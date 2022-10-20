// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import Welcome from 'assets/images/Anya.gif';
import { Grid } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// ==============================|| TYPOGRAPHY ||============================== //

const Dashboard = () => (
    <MainCard title="Home" secondary={<SecondaryAction link="https://github.com/peekok" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={14}>
                <MuiTypography textAlign={'center'} variant="h1">
                    {`Welcome to Excitement ~~`}
                </MuiTypography>
                <MuiTypography textAlign={'center'} variant="h4">
                    {`Enjoy your journey here! You'll find it more interesting than you think!`}
                </MuiTypography>
                <img
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '-webkit-fill-available',
                        maxWidth: 'fit-content'
                    }}
                    src={Welcome}
                    alt="peekok"
                />
                <MuiTypography textAlign={'center'} variant="h5">
                    {`Waku Waku (〃＾▽＾〃)`}
                </MuiTypography>
            </Grid>
        </Grid>
    </MainCard>
);

export default Dashboard;
