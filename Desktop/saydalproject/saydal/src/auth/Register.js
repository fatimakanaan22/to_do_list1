import React, { useEffect, useRef } from "react";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import "../assets/register.css";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import axios from "axios";

import Navbar from "../components/Navbar/navbar";

const Register = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [mobileValid1, setMobileValid1] = useState({
    touched: false,
    isValid: false,
    errMsg: "",
  });

  const checkMobileValidation1 = (event) => {
    const val = event.target.value.trim();
    let valids = { ...mobileValid1 };
    valids.touched = true;
    if (val.length <= 0) {
      valids.isValid = false;
      valids.errMsg = "يجب ادخال رقم موبايل او ايميل ";
    } else {
      valids.isValid = true;
      valids.errMsg = "";
    }

    setMobileValid1({ ...valids });
  };

  const [passwordValid1, setPasswordValid1] = useState({
    touched: false,
    isValid3: false,
    errMsg3: "",
  });

  const checkPasswordValidation1 = (event) => {
    const val = event.target.value.trim();
    let valids = { ...passwordValid1 };
    valids.touched = true;
    if (val.length <= 0) {
      valids.isValid3 = false;
      valids.errMsg3 = "يجب ادخال كلمة سر ";
    } else if (val.length < 8) {
      valids.isValid3 = false;
      valids.errMsg3 = "يجب ان تكون كلمة السر على الاقل 8احرف";
    } else if (val.length > 15) {
      valids.isValid3 = false;
      valids.errMsg3 = "يجب ان تكون كلمة السر على الاكثر 15 حرف ";
    } else {
      valids.isvalid3 = true;
      valids.errMsg3 = "";
    }
    setPasswordValid1({ ...valids });
    console.log(valids);
  };

  const [Mobile1, setMobile1] = useState("");

  const openAccount = async (event) => {
    event.preventDefault();
    let mobile1 = Mobile1.trim();

    let password1 = values.trim();
    let res = await axios.post(
      "https://saydal-apis.herokuapp.com/en/auth/login/",
      { email: mobile1, password: password1 },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      }
    );
    if (mobileValid1.isValid && passwordValid1.isValid3) {
      if (res) {
        console.log("lll");
      }
    }
  };

  const [nameValid, setNameValid] = useState({
    touched: false,
    isValid: false,
    errMsg: "",
  });
  const [currency, setCurrency] = useState();

  const currencies = [
    {
      value: "seller",
      label: "مورد",
    },

    {
      value: "pharmacy",
      label: "صيدلية",
    },
  ];
  // Handle DropDownMenu
  const [isClicked, setIsClicked] = useState();
  const selectRef = useRef(null);

  // handleClickOutSide
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!selectRef.current?.contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
  }, []);

  const [mobileValid, setMobileValid] = useState({
    touched: false,
    isValid: false,
    errMsg: "",
  });

  const [values, setValues] = useState("");

  const [values1, setValues1] = useState("");

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const checkNameValidation = (event) => {
    let val = event.target.value.trim();
    let valids = { ...nameValid };
    valids.touched = true;
    if (val.length <= 0) {
      valids.isValid = false;
      valids.errMsg = "يجب ادخال الاسم";
    } else if (val.split(" ").length < 2) {
      valids.isValid = false;
      valids.errMsg = "يجب ان تدخل الاسم والكنية ";
    } else {
      valids.isValid = true;
      valids.errMsg = "";
    }
    setNameValid({ ...valids });
  };

  const checkMobileValidation = (event) => {
    const val = event.target.value.trim();
    let valids = { ...mobileValid };
    valids.touched = true;
    if (val.length <= 0) {
      valids.isValid = false;
      valids.errMsg = "يجب ادخال رقم موبايل او ايميل ";
    } else {
      valids.isValid = true;
      valids.errMsg = "";
    }

    setMobileValid({ ...valids });
  };

  const [passwordValid, setPasswordValid] = useState({
    touched: false,
    isValid1: false,
    errMsg: "",
  });
  const [Name, setName] = useState("");
  const checkPasswordValidation = (event) => {
    const val = event.target.value.trim();
    let valids = { ...passwordValid };
    valids.touched = true;
    if (val.length <= 0) {
      valids.isValid1 = false;
      valids.errMsg = "يجب ادخال كلمة سر ";
    } else if (val.length < 8) {
      valids.isValid1 = false;
      valids.errMsg = "يجب ان تكون كلمة السر على الاقل 8احرف";
    } else if (val.length > 15) {
      valids.isValid1 = false;
      valids.errMsg = "يجب ان تكون كلمة السر غلى الاكثر 15 احرف";
    } else {
      valids.isvalid1 = true;
      valids.errMsg = "";
    }

    setPasswordValid({ ...valids });
  };

  const checkRegisterValidation = () => {};
  const [Mobile, setMobile] = useState("");

  const [warnings, setwarnings] = useState("");

  const addUser = async (event) => {
    event.preventDefault();
    let name = Name.trim();

    let mobile = Mobile.trim();

    let registerType = currency;
    let password = values1.trim();
    if (!currency) {
      setwarnings("يجب تحديد نوع الاشتراك");
    }
    let res = await axios.post(
      "https://saydal-apis.herokuapp.com/en/auth/register/",
      { fullname: name, email: mobile, password: password, role: registerType },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "ar",
        },
      }
    );
    if (nameValid.isValid && mobileValid.isValid && currency) {
      if (res) {
        console.log("xxx");
      }
    }
  };
  return (
    <>
      <Grid className="box">
      <Navbar />
        <Grid item xl={6} lg={6} md={6} xm={12} xs={12}>
          <div className="register-login">
            <div className="tabs">
              <Box>
                <TabContext id="tabcontext" value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      arial-label="Tabs example"
                      style={{ paddingRight: "20px" }}
                      onChange={handleChange}
                    >
                      <Tab
                        label="تسجيل الدخول"
                        value="1"
                        className="register"
                      ></Tab>
                      <Tab
                        id="12"
                        label="إنشاء حساب "
                        value="2"
                        className="login "
                      ></Tab>
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <form onSubmit={openAccount}>
                      <TextField
                        onBlur={checkMobileValidation1}
                        value={Mobile1}
                        onChange={(e) => setMobile1(e.target.value)}
                        className="mobileNumber"
                        id="input-with-icon-textfield"
                        placeholder="رقم الموبايل او الايميل  "
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneInTalkOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                      {mobileValid1.errMsg ? (
                        <small>{mobileValid1.errMsg}</small>
                      ) : (
                        ""
                      )}
                      <FormControl variant="standard" className="password">
                        <InputLabel htmlFor="standard-adornment-password"></InputLabel>
                        <Input
                          name="password1 "
                          onBlur={checkPasswordValidation1}
                          startAdornment={
                            <InputAdornment position="start">
                              <LockOutlinedIcon />
                            </InputAdornment>
                          }
                          placeholder="كلمة السر"
                          id="standard-adornment-password"
                          type={values.showPassword ? "text" : "password"}
                          value={values}
                          onChange={(e) => setValues(e.target.value)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      {passwordValid1.errMsg3 ? (
                        <small>{passwordValid1.errMsg3}</small>
                      ) : (
                        ""
                      )}
                      <button className="submit1" style={{ marginTop: "15%" }}>
                        <span style={{ color: "white" }}> تسجيل الدخول </span>
                      </button>
                    </form>
                    <div style={{ marginTop: "10%" }}>
                      {" "}
                      ليس لديك حساب بالفعل ؟{" "}
                      <Link
                        underline="none"
                        onClick={() => setValue("2")}
                        style={{ cursor: "pointer" }}
                        className="link1"
                      >
                        إنشاء حساب
                      </Link>{" "}
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <form onSubmit={addUser}>
                      <TextField
                        value={Name}
                        className="name"
                        name="name"
                        onBlur={checkNameValidation}
                        onChange={(e) => setName(e.target.value)}
                        id="input-with-icon-textfield"
                        placeholder="الاسم الكامل "
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                      {nameValid.errMsg ? (
                        <small>{nameValid.errMsg}</small>
                      ) : (
                        ""
                      )}
                      <TextField
                        className="mobileNumber"
                        name="mobile"
                        value={Mobile}
                        onBlur={checkMobileValidation}
                        onChange={(e) => setMobile(e.target.value)}
                        id="input-with-icon"
                        placeholder="رقم الموبايل او الايميل  "
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneInTalkOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                      {mobileValid.errMsg ? (
                        <small>{mobileValid.errMsg}</small>
                      ) : (
                        ""
                      )}
                      {/* <TextField
                        className="registerType"
                        id="standard-select-currency"
                        onBlur={checkRegisterValidation}
                        select
                        name="registerType"
                        value={currency}
                        onChange={handleChange1}
                        variant="standard"
                      > */}
                      <div className="drop-down-menu" ref={selectRef}>
                        <div className="drop-down-menu-content ">
                          <div
                            className={
                              isClicked
                                ? "drop-down-menu-heading clicked"
                                : "drop-down-menu-heading"
                            }
                            onClick={() => {
                              setIsClicked(!isClicked);
                            }}
                          >
                            <span> {currency} </span>
                            <span className={isClicked ? "rotate" : ""}>
                              {/* <BiDownArrow /> */}
                            </span>
                          </div>

                          <div
                            className={
                              isClicked
                                ? "drop-down-body show "
                                : "drop-down-body "
                            }
                          >
                            <ul className="drop-down-menu-list  ">
                              {currencies.map((option, index) => {
                                return (
                                  <li
                                    onClick={() => {
                                      setIsClicked(false);
                                      setCurrency(option.value);
                                    }}
                                    key={index}
                                  >
                                    {option.label}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {warnings ? <small>{warnings}</small> : ""}
                      <FormControl variant="standard" className="password">
                        <InputLabel htmlFor="standard-adornment-password"></InputLabel>
                        <Input
                          name="password "
                          onBlur={checkPasswordValidation}
                          startAdornment={
                            <InputAdornment position="start">
                              <LockOutlinedIcon />
                            </InputAdornment>
                          }
                          placeholder="كلمة السر"
                          id="standard-adornment-password"
                          type={values1.showPassword ? "text" : "password"}
                          value={values1}
                          onChange={(e) => setValues1(e.target.value)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      {passwordValid.errMsg ? (
                        <small>{passwordValid.errMsg}</small>
                      ) : (
                        ""
                      )}

                      <button
                        style={{ position: "relative" }}
                        className="submit"
                        type="submit"
                      >
                        {" "}
                        <span style={{ color: "white" }}> إنشاء حساب</span>
                      </button>
                    </form>
                    <div style={{ marginTop: "10%" }}>
                      {" "}
                      لديك حساب بالفعل ؟{" "}
                      <Link
                        onClick={() => setValue("1")}
                        style={{ cursor: "pointer" }}
                        underline="none"
                      >
                        تسجيل الدخول
                      </Link>{" "}
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Register;
