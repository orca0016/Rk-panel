import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";
import "./setting.css";
import { useState } from 'react';



function Setting() {
  const { dark } = useContext(ApiContext);
  const [src , setSrc] = useState("https://img.freepik.com/free-photo/beautiful-portrait-teenager-woman_23-2149453395.jpg?w=740&t=st=1691929647~exp=1691930247~hmac=d1eb12d1d3fe24d85188e001cf77a386218c7fb63f3e8146c5498fac020b3224")

  return (
    <div className={`setting-profile ${dark ? "light1" : null}`}>
      <div className="container-setting">
        <div className={`setting-top ${dark ? "light2" : null}`}>
          <form>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                    <input placeholder='نام ' required={true} className='setting-input' type="text" />
                </Grid>
                <Grid item xs={6}>
                    <input placeholder='شماره دانش آموزی' required={true} className='setting-input' type="text" />
                </Grid>
                <Grid item xs={6}>
                    <input placeholder='نام خانوادگی' required={true} className='setting-input' type="text" />
                </Grid>
                <Grid item xs={6}>
                    <input placeholder='بیوگرافی' required={true} className='setting-input' type="text" />
                </Grid>
                <Grid item xs={6}>
                    <input placeholder='شماره تماس' required={true} className='setting-input' type="text" />
                </Grid>
                <Grid item xs={6}>
                    <input placeholder='کد مشاور' required={true} className='setting-input' type="text" />
                </Grid>
                <Grid item xs={6}>
                    <input placeholder='ایمیل' required={true} className='setting-input' type="text" />
                </Grid>
                <Grid  item xs={6}>
                <Button type='submit' className='btn-form ' variant="contained"  sx={{
                  float:"left",
                  marginLeft:4,
                  width: 1/2
                }}>ثبت</Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
        <div className={`setting-botton ${dark ? "light2" : null}`}>
        <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item  xs={6}>
                    <input placeholder='عکس پروفایل خود    ' required={true} onChange={(e)=>{setSrc(e.target.value)}}  className='setting-input' type="text" />
                <Button type='submit' className='btn-form ' variant="contained"  sx={{
                  float:"left",
                  marginLeft:4,
                  marginTop:2,
                  width: 1/2
                }}>ثبت</Button>
                </Grid>
                <Grid  item xs={6}>
                  <div className="setting-profile-img">
                  <img src={src} alt="profile" />
                  </div>
                </Grid>
              </Grid>
            </Box>
        </div>
      </div>
    </div>
  );
}

export default Setting;
