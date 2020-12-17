import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux'
import { logIn } from '../../redux/Actions';

class Auth1 extends Component {

    state = {
      pass: '',
      email: ''
    };

handleChangeEmail = (event,values) => {
  

    this.setState({
      email: values
    }, () => {
      console.log(this.state.email);
    });
}
handleChange = event => {
  const { name, value } = event.target;

  this.setState({
    [name]: value
  });
}

onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}
handleButtonClick() 
{
  console.log(this.state);
  if (this.state.email === 'admin@mail.ru' && this.state.pass === 'admin') 
  {
    this.props.login_bool(true);
    if (this.props.logInf) {
      this.props.history.push('/main');
    }
  }
  
  else if (this.state.email === 'stan@mail.ru' && this.state.pass === 'nuts') 
  {
    this.props.login_bool(true);
    if (this.props.logInf) {
      this.props.history.push('/main');
    }
  }
  else 
  {
    this.props.login_bool(false);
    alert("Неверный пароль");
  }
  
  
}

  render() {
    
    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    const classes = useStyles;
    const { email, pass } = this.state;
    return (
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter
        </Typography>
          <form className={classes.form} noValidate>
          <Autocomplete
            onChange={this.handleChangeEmail} 
            id="email"
            freeSolo
            options={Emails.map((option) => option.title)}
            renderInput={(params) => (
          <TextField {...params} label="Email Addres" margin="normal" variant="outlined" margin="normal" required fullWidth id="email" name="email" value={email} autoFocus type={'text'} onChange={this.handleChange}/>
          )}
          />
          <Autocomplete 
            id="pass"
            freeSolo
            options={Passs.map((option) => option.title)}
            renderInput={(params) => (
          <TextField {...params} label="pass" margin="normal" variant="outlined" margin="normal" required fullWidth id="pass" name="pass" value={pass} autoFocus onChange={this.handleChange} type="password"/>
          )}
          />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleButtonClick.bind(this)}
            >
              
              Sign up
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Cannot sign up? Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );

  }
}

const Emails = [
  { title: 'admin@mail.ru'},
  { title: 'stan@mail.ru'}
  
];
const Passs = [
  { title: ''},
  { title: 'Собака'}
  
];
const mapStateToProps = (state) => {
  return {
    logInf: state.auth_reducer.logged
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login_bool: (log) => dispatch(logIn(log))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth1);