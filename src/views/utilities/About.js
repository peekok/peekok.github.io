// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { Grid, LinearProgress, linearProgressClasses } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import Avatar from 'assets/images/users/Avatar.jpg';
import { styled, useTheme } from '@mui/material/styles';
import { PropTypes } from 'prop-types';
// ==============================|| TYPOGRAPHY ||============================== //
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#fff'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.secondary.main
    }
}));
function LinearProgressWithLabel({ value, ...others }) {
    const theme = useTheme();

    return (
        <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
            <Grid item>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <MuiTypography variant="h6" sx={{ color: theme.palette.secondary[800] }}>
                            Progress
                        </MuiTypography>
                    </Grid>
                    <Grid item>
                        <MuiTypography variant="h6" color="inherit" sx={{ color: theme.palette.secondary[800] }}>{`${Math.round(
                            value
                        )}%`}</MuiTypography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <BorderLinearProgress variant="determinate" value={value} {...others} />
            </Grid>
        </Grid>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};
const About = () => {
    const theme = useTheme();
    return (
        <MainCard
            title="About"
            style={{ backgroundColor: theme.palette.secondary.light }}
            secondary={<SecondaryAction link="https://github.com/peekok" />}
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={14}>
                    <img
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            borderRadius: '20%',
                            width: '150px',
                            maxWidth: 'fit-content'
                        }}
                        src={Avatar}
                        alt="peekok"
                    />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="body1" color={theme.palette.text.primary} padding={5}>
                        {`" I'm a Software Engineer who is passionate about making open-source more accessible, 
                        creating technology to elevate people, and building community. 
                        Some technologies I enjoy working with include ReactJS, NodeJS, and MongoDB.
                        Cloud Computing is also my favorite thing to do.
                        and I really enjoy watching anime by the way. "`}
                    </MuiTypography>
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h2" color={theme.palette.text.primary} paddingBottom={3}>
                        Skills & Techniques:
                    </MuiTypography>
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5">
                        JavaScript/NodeJS/TypeScript
                    </MuiTypography>
                    <LinearProgressWithLabel value={100} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        ReactJS
                    </MuiTypography>
                    <LinearProgressWithLabel value={80} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        SQL & NoSQL
                    </MuiTypography>
                    <LinearProgressWithLabel value={80} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        Cloud Computing
                    </MuiTypography>
                    <LinearProgressWithLabel value={90} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        Object Oriented Programming
                    </MuiTypography>
                    <LinearProgressWithLabel value={95} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        Java
                    </MuiTypography>
                    <LinearProgressWithLabel value={90} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        Python
                    </MuiTypography>
                    <LinearProgressWithLabel value={85} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        Penetration Testing
                    </MuiTypography>
                    <LinearProgressWithLabel value={85} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        Linux/Unix System Administration
                    </MuiTypography>
                    <LinearProgressWithLabel value={95} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        UX/UI
                    </MuiTypography>
                    <LinearProgressWithLabel value={80} />
                    <MuiTypography sx={{ color: 'text.secondary' }} variant="h5" paddingTop={3}>
                        Project Management
                    </MuiTypography>
                    <LinearProgressWithLabel value={90} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default About;
