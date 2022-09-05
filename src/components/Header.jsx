import { useNavigate } from "react-router-dom";

import { Grid, Button } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';

import { useSearchStore } from "../env/zustand";

const Header = () => {
    const { searchGoods, setSearchGoods } = useSearchStore();
    const navigate = useNavigate();

    /** 유저가 홈 배너 클릭했을 때
     *  홈 페이지로 이동
     */
    const onClickHome = () => {
        navigate("/");
    };

    /** 유저가 검색 창에 입력했을 때
     *  입력한 값 state로 관리 (searchGoods)
     */
    const onChangeSearch = (e) => {
        setSearchGoods(e.target.value);
    };

    /** 검색 기능
     *  TODO : searchGoods 변수로 쿼리문 짜기
     */
    const onClickSearch = () => {
        console.log(searchGoods);
    };

    /** 유저가 검색 창에서 엔터 눌렀을 때
     *  onClickSearch() 실행
     */
    const onKeyPressSearch = (e) => {
        if (e.key === 'Enter') {
            onClickSearch();
        }
    };

    /** 유저가 로그인 버튼 눌렀을 때
     *  로그인 페이지로 이동
     */
    const onClickLogin = () => {
        navigate("/login");
    }

    return (
        <header>
            <Grid container columns={{ xs: 12 }} style={{ border: '1px solid #e0e2e1', height: 60, textAlign: 'center', alignItems: 'center', display: 'flex' }}>
                <Grid item xs={2}>
                    <Button
                        onClick={onClickHome}
                        sx={{
                            color: 'black',
                            textTransform: 'none',
                            fontSize: 25,
                            '&:hover': {
                                backgroundColor: 'white',
                            }
                        }}
                    >
                        YoungStore
                    </Button>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item xs>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                    <Button>Shop</Button>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item xs={2}>
                    <FormControl sx={{ width: '80%' }} variant="standard">
                        <Input
                            placeholder="Search"
                            onChange={onChangeSearch}
                            onKeyPress={onKeyPressSearch}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton type="button" onClick={onClickSearch} style={{ padding: 0 }}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item xs={1}>
                    <Button
                        onClick={onClickLogin}
                        sx={{
                            width: "80%",
                            color: 'black',
                            borderColor: 'black',
                            '&:hover': {
                                backgroundColor: 'black',
                                color: 'white',
                                borderColor: 'black',
                            }
                        }}
                    >
                        로그인
                    </Button>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header;