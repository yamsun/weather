import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

export default function AppTopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Digital Weather
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 11.9996C3 7.02883 7.02958 3 11.9996 3C16.9697 3 20.9992 7.02958 21 12.0004C21 15.9752 18.4246 19.3471 14.8503 20.5388C14.3943 20.6273 14.2323 20.346 14.2323 20.1068C14.2323 20.0086 14.2334 19.8364 14.235 19.6063C14.2381 19.1422 14.2428 18.4423 14.2428 17.6371C14.2428 16.7979 13.9548 16.2497 13.6323 15.9707C15.6362 15.748 17.7414 14.9867 17.7414 11.5301C17.7414 10.5477 17.3919 9.74447 16.8152 9.11449C16.9082 8.88725 17.2164 7.97229 16.7267 6.73259C16.7267 6.73259 15.9715 6.49035 14.254 7.65506C13.5348 7.45556 12.7646 7.35582 11.9996 7.35207C11.2347 7.35582 10.4652 7.45556 9.74747 7.65506C8.02779 6.4911 7.27182 6.73259 7.27182 6.73259C6.78284 7.97229 7.09108 8.88725 7.18483 9.11449C6.60885 9.74447 6.25711 10.5477 6.25711 11.5301C6.25711 14.9785 8.35853 15.7502 10.3572 15.9775C10.1 16.2024 9.86671 16.5992 9.78572 17.1812C9.27199 17.4114 7.96929 17.8089 7.16683 16.4334C7.16683 16.4334 6.69135 15.5695 5.78763 15.5057C5.78763 15.5057 4.90942 15.4937 5.72614 16.0525C5.72614 16.0525 6.31561 16.3292 6.72509 17.3694C6.72509 17.3694 7.25382 18.9758 9.75722 18.4314C9.75927 18.8427 9.76267 19.2411 9.76532 19.5527C9.76752 19.8109 9.76922 20.0096 9.76922 20.1068C9.76922 20.3445 9.60422 20.6228 9.15424 20.5395C5.57839 19.3493 3 15.976 3 11.9996Z" fill="white"></path>
              </svg>
          </IconButton>
          </Toolbar>
      </AppBar>
    </Box>
  );
}