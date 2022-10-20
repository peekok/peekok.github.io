// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import LetGoDemo from 'assets/images/demos/LetGoDemo.png';
import robotArmMovementDemo from 'assets/images/demos/robotArmMovementDemo.gif';
import ESP32PIRSensorDemo from 'assets/images/demos/ESP32PIRSensorDemo.png';
import voice_recognitionDemo from 'assets/images/demos/voice_recognition.png';
import { Grid } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| TYPOGRAPHY ||============================== //

const Portfolio = () => (
    <MainCard title="Portfolio">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <SubCard title="LetGo" secondary={<SecondaryAction link="https://github.com/peekok/LetGo" />}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="caption" gutterBottom>
                                I programmed this in college for Android Mobile Development, we were a group, made an awesome project that
                                got a lot of attention. check it out
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h6" gutterBottom>
                                Photo of my sexy program:
                                <img
                                    style={{
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '-webkit-fill-available',
                                        maxHeight: '300px'
                                    }}
                                    src={LetGoDemo}
                                    alt="LetGoDemo"
                                />
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="robot-arm-movement" secondary={<SecondaryAction link="https://github.com/peekok/robot-arm-movement" />}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="caption" gutterBottom>
                                This was the hardest one, I've compiled a JavaScript program that can control the movement of a robot arm in
                                the Arduino UNO, to move a servo.
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h6" gutterBottom>
                                Photo of my sexy program:
                                <img
                                    style={{
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '-webkit-fill-available',
                                        maxHeight: '300px'
                                    }}
                                    src={robotArmMovementDemo}
                                    alt="robot-arm-test"
                                />
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="ESP32-PIR-SENSOR" secondary={<SecondaryAction link="https://github.com/peekok/ESP32-PIR-Sensor" />}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="caption" gutterBottom>
                                Here I've simulated a PIR sensor with an ESP32, it wasn't hard although it was my first time using ESP32
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h6" gutterBottom>
                                Photo of my sexy program:
                                <img
                                    style={{
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '-webkit-fill-available',
                                        maxHeight: '300px'
                                    }}
                                    src={ESP32PIRSensorDemo}
                                    alt="PIR-Simulation"
                                />
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="voice_recognition" secondary={<SecondaryAction link="https://github.com/peekok/voice_recognition" />}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="caption" gutterBottom>
                                This is the first program I made in the summer training. I made a speech-to-text program
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h6" gutterBottom>
                                Photo of my sexy program:
                                <img
                                    style={{
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '-webkit-fill-available',
                                        maxHeight: '300px'
                                    }}
                                    src={voice_recognitionDemo}
                                    alt={'voice_recognitionDemo'}
                                />
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default Portfolio;
