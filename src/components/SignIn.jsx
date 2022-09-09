import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

import { signInWithEmailAndPassword,  setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../env/firebase";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const { target: { id, value } } = event;
        if (id === "email") {
            setEmail(value)
        } else if (id === "password") {
            setPassword(value)
        }
    }

    const onClickLogin = () => {
        setPersistence(auth, browserSessionPersistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password).then((res) => {
                sessionStorage.setItem("user_id", res._tokenResponse.localId);
                navigate("/home");
            }).catch(() => {
                alert("로그인 오류");
            });
        });
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickLogin();
        }
    }

    return (
        <Grid container>
            <Grid item sm={0} md={4.25} style={{ height: '100vh', backgroundColor: '#ebebeb' }}>

            </Grid>
            <Grid item sm={12} md={3.5}
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100vh',
                    textAlign: 'center'
                }}
            >
                <Box style={{ marginTop: 100, width: '100%'}}>
                    <LockIcon fontSize='large'/>
                    <Typography style={{marginTop: 5}}>로그인</Typography>
                    <TextField
                        id="email"
                        placeholder="이메일"
                        variant="outlined"
                        sx={{
                            "& .MuiInputLabel-root": { color: 'black' },
                            "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#dddddd" } },
                            "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { borderColor: "black" } },
                            "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "black" } },
                            width: '75%',
                            marginTop: 4
                        }}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                    <TextField
                        id="password"
                        placeholder="비밀번호"
                        type="password"
                        variant="outlined"
                        sx={{
                            "& .MuiInputLabel-root": { color: 'black' },
                            "& .MuiOutlinedInput-root": { "& > fieldset": { borderColor: "#dddddd" } },
                            "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { borderColor: "black" } },
                            "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: "black" } },
                            width: '75%',
                            marginTop: 1
                        }}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                    <Button 
                        onClick={onClickLogin}
                        style={{
                            width: '75%', 
                            marginTop: 20, 
                            backgroundColor: 'black', 
                            color: 'white', 
                            height: 50
                        }}
                    >
                        <Typography variant="subtitle1">로그인</Typography>
                    </Button>
                    <Typography variant="subtitle2" style={{marginTop: 10}}>
                        계정이 없으신가요? <Link to="/" style={{color: "#4e4dec", textDecoration: "none"}}>가입하기</Link>
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={0} md={4.25} style={{ height: '100vh', backgroundColor: '#ebebeb' }}>

            </Grid>
        </Grid>
    )
}

export default SignIn;