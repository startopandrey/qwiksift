import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  ListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import { deepOrange, deepPurple } from "@mui/material/colors";
import NextLink from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled, alpha } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { FormControl, InputLabel, NativeSelect, Select } from "@mui/material";
import dynamic from "next/dynamic";
import TagCloud from "react-tag-cloud";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Home() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "Taylor Sift",
      href: "/",
      src: "/images/user1.png",
      active: true,
    },
    { id: 1, name: "Seymour Cevees", href: "/", src: "", active: false },
    { id: 2, name: "Res Hugh May", href: "/", src: "", active: false },
    {
      id: 3,
      name: "Jack Reacher",
      href: "/",
      src: "/images/user2.png",
      active: false,
    },
    { id: 4, name: "Ethan Hunt", href: "/", src: "", active: false },
    {
      id: 5,
      name: "John Doe",
      href: "/",
      src: "/images/user3.png",
      active: false,
    },
    { id: 6, name: "Mary Poppins", href: "/", src: "", active: false },
  ]);
  const [category, setCategory] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const User = (props) => {
    const { id, href, icon, name, user, ...others } = props;
    const router = useRouter();
    const active = user.active;

    return (
      <ListItem
        onClick={() => {
          const newArr = users.map((item) => {
            if (item.id == id) {
              return { ...item, active: true };
            }

            return { ...item, active: false };
          });
          setUsers(newArr);
        }}
        disableGutters
        sx={{
          display: "flex",
          mb: 0.5,
          py: 0,
          borderRadius: "5px",
          paddingLeft: "5px",
          width: "100%",
          // cursor: 'pointer',
          // '&:hover': {
          //   backgroundColor: "primary.light",
          //   ,
          //   borderRadius: '4px',
          //   '& $listItemIcon': {
          //     color: "primary.main",
          //     marginLeft: '-4px'
          //   }
          // },
          // '& + &': {
          //   marginTop: 2
          // }
        }}
        // {...others}
      >
        {/* <NextLink href={href} passHref> */}
        <Button
          // component="a"
          startIcon={icon}
          disableRipple
          sx={{
            borderRadius: 0,
            color: active ? "primary.main" : "neutral.800",
            fontWeight: "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            py: 1,

            backgroundColor: active && "#232966",
            outlineLeft: active && `4px solid #FD51AE;`,
            boxSizing: active && "border-box",
            boxShadow: active && `-5px 0px 0px 0px #FD51AE;`,
            "& .MuiButton-startIcon": {
              color: active ? "primary.main" : "neutral.800",
            },
            "&:hover": {
              backgroundColor: "#232966",
              outlineLeft: `4px solid #FD51AE;`,
              boxSizing: "border-box",
              boxShadow: `-5px 0px 0px 0px #FD51AE;`,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderRadius: 0,
              flexGrow: 1,
            }}
          >
            {" "}
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                color: "text.primary",
                width: 30,
                height: 30,
                fontSize: 15,
              }}
              alt={name}
              src={user.src}
            />
            <Typography
              sx={{
                color: "text.primary",
                fontFamily: "Lato",
                fontWeight: active ? 900 : 700,
              }}
              variant="body1"
            >
              {name}
            </Typography>{" "}
          </Box>
        </Button>
        {/* </NextLink> */}
      </ListItem>
    );
  };
  const DashboardLeft = () => {
    return (
      <Box
        sx={{
          width: "300px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <Box sx={{ display: "flex" }}>
          <Image
            style={{ objectFit: "contain" }}
            src={"/logo.png"}
            width="150"
            height={70}
          ></Image>
        </Box>
        <Box
          sx={{
            height: "70vh",
            width: "300px",
            borderRadius: "10px",
            background:
              "linear-gradient(162.34deg, #161A42 22.61%, rgba(22, 26, 66, 0) 118.29%)",
            border: " 1px solid #161A42",
            py: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {users.map((item) => (
              <User
                user={item}
                id={item.id}
                key={item.name}
                icon={item.icon}
                href={item.href}
                name={item.name}
              />
            ))}
          </Box>
          <Box
            sx={{
              mx: 3,
              p: 1.4,
              display: "flex",
              width: "70%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
                color: "text.primary",
              }}
              variant="body1"
            >
              1
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              variant="body1"
            >
              2
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              variant="body1"
            >
              3
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              variant="body1"
            >
              4
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              variant="body1"
            >
              5
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              variant="body1"
            >
              6
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              variant="body1"
            >
              7
            </Typography>
            <ArrowForwardIosIcon
              sx={{ width: 20, height: 20 }}
            ></ArrowForwardIosIcon>
          </Box>
        </Box>
      </Box>
    );
  };
  const DashboardMiddle = () => {
    const Search = styled("div")(({ theme }) => ({
      position: "relative",
      display: "flex",
      borderRadius: 0,
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
      background: "#161A42",
      margin: "2px",
      "&:hover": {
        backgroundColor: "rgba(#161A42, 0.15)",
      },
      //   marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",

      justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      borderRadius: 0,
      width: "100%",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        // [theme.breakpoints.up("md")]: {
        //   width: "20ch",
        // },
      },
    }));
    const Input = styled(InputBase)(({ theme }) => ({
      // "label + &": {
      //   marginTop: theme.spacing(3),
      // },
      "& .MuiInputBase-input": {
        height: "100%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        padding: "none",
        paddingLeft: 20,
        border: "none",

        paddingTop: "0",
        "&::before": {
          content: '""',
          border: "none",
          background: "none",
        },
        "&:hover": {
          border: "none",
          background: "none",
        },
        "&::focus": {
          border: "none",
          background: "none",
        },
        "&::after": {
          content: '""',
          border: "none",
          background: "none",
        },

        position: "relative",

        fontSize: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          //   "-apple-system",
          //   "BlinkMacSystemFont",
          //   '"Segoe UI"',
          '"Lato"',
          //   '"Helvetica Neue"',
          //   "Arial",
          "sans-serif",
          //   '"Apple Color Emoji"',
          //   '"Segoe UI Emoji"',
          //   '"Segoe UI Symbol"',
        ].join(","),
      },
    }));
    const AppBar = () => {
      return (
        <Box
          sx={{
            display: "flex",
            //   borderRadius: 8,
            position: "relative",
            width: "100%",
            height: 55,
            //   borderImage: "linear-gradient(to left, #743ad5, #d53a9d)",
            //   borderStyle: "solid",
            //   borderWidth: 2,
            //   borderRadius: 8,
            //   borderImageSlice: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "10px",
              padding: "2px",
              background:
                "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              MaskComposite: "exclude",
            },
          }}
        >
          <FormControl sx={{ width: 100, m: 0, border: "none" }}>
            {" "}
            <NativeSelect
              input={<Input />}
              value={category}
              sx={{
                height: "100%",
                background: "#283081",
                width: "100%",
                margin: "2px",
                borderTopLeftRadius: 10,

                borderBottomLeftRadius: 10,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              variant="outlined"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChangeCategory}
            >
              <option value="">All</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{}}
              placeholder="Search by: location, position, company, keywords..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      );
    };
    const textSizes = {
      small: {
        fontSize: 10,
        background: "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      medium: {
        fontSize: 20,
        background: "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      large: {
        fontSize: 30,
        background: "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      superLarge: {
        fontSize: 40,
        background: "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    };
    return (
      <Box sx={{}}>
        <Box
          sx={{
            width: "100%",
            height: 60,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <AppBar></AppBar>
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Button
              sx={{
                background: "#283081",
                textTransform: "capitalize",
                borderRadius: "10px",
              }}
              size="large"
              variant="contained"
            >
              Search
            </Button>{" "}
            <Button
              variant="outlined"
              size="large"
              sx={{
                opacity: 0.6,
                textTransform: "capitalize",
                borderRadius: "10px",
              }}
            >
              Show Filters
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src="/images/user.png" alt="ald"></Avatar>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsIcon sx={{ width: 30, height: 30 }}></SettingsIcon>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box>
          <Grid
            sx={{
              height: 500,
              // width: "100%",
              mt: 5,
            }}
            container
            spacing={2}
          >
            <Grid item lg="6">
              <Box
                sx={{
                  width: "100%",
                  height: 350,
                  position: "relative",
                  background: "theme.light",
                  px: 3,
                  py: 2,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "10px",
                    padding: "2px",
                    background:
                      "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    MaskComposite: "exclude",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "text.primary",
                    position: "absolute",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                  variant="h5"
                >
                  Radar Chart
                </Typography>
                <Chart
                  options={{
                    stroke: {
                      show: true,
                      width: 1,
                      colors: [],
                      dashArray: 0,
                    },

                    chart: {
                      foreColor: "#000",
                      // fontFamily: "IBM Plex Sans, sans-serif",
                      offsetX: -50,
                      offsetY: -20,
                      height: 300,

                      type: "radar",
                    },
                    legend: {
                      show: false,
                    },
                    title: {
                      text: "",
                    },
                    toolbar: {
                      show: false,
                    },
                    xaxis: {
                      categories: [
                        "LOCATION",
                        "SKILLS \n & KEYWORDS",
                        "QUALIFICATIONS",
                        "EXPERIENCE",
                        "PREVIOUS \n EMPLOYERS",
                      ],
                      labels: {
                        show: true,
                        style: {
                          colors: ["#000"],
                          fontSize: "10px",

              
                        },
                      },
                    },
                    subtitle: {
                      text: undefined,
                      align: "left",
                      margin: 10,
                      offsetX: 0,
                      offsetY: 0,
                      floating: false,
                      style: {
                        fontSize: "12px",
                        fontWeight: "normal",
                        fontFamily: undefined,
                        color: "#9699a2",
                      },
                    },
                  }}
                  series={[
                    {
                      name: "Series 1",
                      data: [80, 50, 30, 40, 100],
                    },
                    {
                      name: "Series 2",
                      data: [20, 30, 40, 80, 20],
                    },
                  ]}
                  type="radar"
                  width={400}
                  height={400}
                />
                {/* <ReactApexChart
                options={{
                  chart: {
                    height: 350,
                    type: "radar",
                  },
                  title: {
                    text: "Basic Radar Chart",
                  },
                  xaxis: {
                    categories: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                    ],
                  },
                }}
                series={[
                  {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20],
                  },
                ]}
                type="radar"
                height={350}
              /> */}
              </Box>
            </Grid>
            <Grid item xs="6">
              {" "}
              <Box
                sx={{
                  width: "100%",
                  height: 350,
                  position: "relative",
                  px: 3,
                  py: 2,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "10px",
                    padding: "2px",
                    background:
                      "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    MaskComposite: "exclude",
                  },
                }}
              >
                {" "}
                <Typography
                  sx={{
                    color: "text.primary",
                    position: "absolute",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                  variant="h5"
                >
                  Skills & Keywords
                </Typography>
                <TagCloud
                  style={{
                    fontFamily: "Inter, sans-serif",
                    // fontSize: ,
                    fontWeight: "bold",
                    marginTop: 10,
                    color: "text.primary",
                    padding: 5,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div style={textSizes.superLarge}>Machine</div>
                  <div style={textSizes.small}>AWS EC2</div>
                  <div style={textSizes.small}>Cloud Computing</div>
                  <div style={textSizes.small}>Data Lake</div>
                  <div style={textSizes.small}>Streams</div>
                  <div style={textSizes.small}>Azure</div>
                  <div style={textSizes.medium}>Virtuous</div>
                  <div style={textSizes.medium}>Big Data</div>
                  <div style={textSizes.medium}>Full Stack</div>
                  <div style={textSizes.medium}>GPT4</div>
                  <div style={textSizes.medium}>GPC</div>
                  <div style={textSizes.medium}>IOT</div>
                </TagCloud>
              </Box>
            </Grid>
            <Grid item xs="6">
              {" "}
              <Box
                sx={{
                  width: "100%",
                  height: 350,
                  position: "relative",
                  px: 3,
                  py: 2,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "10px",
                    padding: "2px",
                    background:
                      "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    MaskComposite: "exclude",
                  },
                }}
              >
                {" "}
                <Typography
                  sx={{
                    color: "text.primary",
                    position: "absolute",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                  variant="h5"
                >
                  Experience & Tenure
                </Typography>
                <Box sx={{ width: "100", height: "100%" }}>
                  <Image
                    style={{
                      objectFit: "contain",
                      padding: 10,
                    }}
                    src="/lines.png"
                    layout="fill"
                  />
                </Box>
                {/* <Box>
                  <Image
                    style={{
                      marginTop: 50,
                      marginLeft: -30,
                      objectFit: "contain",
                      width: "100% !important",
                      position: "relative !important",
                      height: "unset !important",
                    }}
                    src="/lines.png"
                    width={400}
                    height={300}
                  />
                </Box> */}
              </Box>
            </Grid>
            <Grid item xs="6">
              {" "}
              <Box
                sx={{
                  width: "100%",
                  height: 350,
                  position: "relative",
                  px: 3,
                  py: 2,
                  display: "flex",
                  justifyContent: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "10px",
                    padding: "2px",
                    background:
                      "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    MaskComposite: "exclude",
                  },
                }}
              >
                {" "}
                <Typography
                  sx={{
                    color: "text.primary",
                    position: "absolute",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                  variant="h5"
                >
                  Location
                </Typography>
                <Box sx={{ width: "100", height: "100%" }}>
                  <Image
                    style={{
                      objectFit: "contain",
                      padding: 10,
                    }}
                    src="/world.png"
                    layout="fill"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  const DashboardRight = () => {
    return (
      <Box
        sx={{
          width: 300,
          height: "100%",
          position: "relative",
          px: 3,
          py: 2,
          mr: 4,
          background: "url('/bg.png')",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "10px",
            padding: "2px",
            background:
              "linear-gradient(45deg,#FF51AC, #A05CE6, #1968FA, #D952CA), no-repeat",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            MaskComposite: "exclude",
         
          },
        }}
      >
        {" "}
        <Chart
          options={{
            chart: {
              height: 350,
              type: "radialBar",
              toolbar: {
                show: true,
              },
            },
            plotOptions: {
              radialBar: {
                startAngle: 60,
                endAngle: -320,
                hollow: {
                  margin: 0,
                  size: "70%",
                  background: "transparent",
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: "front",
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                  },
                },
                track: {
                  background: "transparent",
                  strokeWidth: "67%",
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                  },
                },

                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -10,
                    show: true,
                    color: "#888",
                    fontSize: "17px",
                  },
                  value: {
                    formatter: function (val) {
                      return parseInt(val);
                    },
                    color: "#111",
                    fontSize: "36px",
                    show: true,
                  },
                },
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0,
                gradientToColors: ["#FF51AC", "#A05CE6", "#1968FA", "#D952CA"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
              },
            },
            stroke: {
              lineCap: "round",
            },
            labels: ["Percent"],
          }}
          series={[85]}
          type="radialBar"
          height={200}
        />
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 700,
            color: "text.primary",
            textAlign: "center",
            mb: 2,
          }}
          variant="h4"
        >
          Taylor Sift
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: 1.5,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: 20, height: 20, position: "relative" }}>
              <Image
                src="/icons/location.png"
                style={{
                  objectFit: "contain",

                  width: "100%",
                }}
                fill
              ></Image>
            </Box>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "text.primary",
                ml: 1,
                mb: 1,
              }}
              variant="body2"
            >
              London, United Kingdom
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: 20, height: 20, position: "relative" }}>
              <Image
                src="/icons/email.png"
                style={{
                  objectFit: "contain",

                  width: "100%",
                }}
           width={40}
           height={20}
              ></Image>
            </Box>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "text.primary",
                ml: 1,
                mb: 1,
              }}
              variant="body2"
            >
              taylor.sift@outlook.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: 20, height: 20, position: "relative" }}>
              <Image
                src="/icons/phone.png"
                style={{
                  objectFit: "contain",

                  width: "100%",
                }}
                fill
              ></Image>
            </Box>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "text.primary",
                ml: 1,
                mb: 1,
              }}
              variant="body2"
            >
              44 2258 257 021
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
          <Box sx={{ width: 20, height: 20, position: "relative" }}>
              <Image
                src="/icons/in.png"
                style={{
                  objectFit: "contain",

                  width: "100%",
                }}
                fill
              ></Image>
            </Box>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "text.primary",
                ml: 1,
                mb: 1,
              }}
              variant="body2"
            >
              linkedin.com/taylor-sift
            </Typography>
          </Box>
        </Box>
        <Box>
          {" "}
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 700,
              color: "text.primary",
              ml: 1,
              mb: 2,
              my: 2,
              textAlign: "center",
            }}
            variant="body2"
          >
            RECENT ROLES
          </Typography>
          <Box
            sx={{
              background: "rgba(22, 26, 66, 0.7)",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              backdropFilter: "blur(3.92708px)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                Lead Data Scientist
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                Machine Learning Lead
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                ML DevOps
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          {" "}
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 700,
              color: "text.primary",
              ml: 1,
              mb: 2,
              my: 2,
              textAlign: "center",
            }}
            variant="body2"
          >
            QUALIFICATIONS
          </Typography>
          <Box
            sx={{
              background: "rgba(22, 26, 66, 0.7)",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              backdropFilter: "blur(3.92708px)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                Phd Data Scientist
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                BS Computer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                AWS Engineer
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          {" "}
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 700,
              color: "text.primary",
              ml: 1,
              mb: 2,
              my: 2,
              textAlign: "center",
            }}
            variant="body2"
          >
            Right to work
          </Typography>
          <Box
            sx={{
              background: "rgba(22, 26, 66, 0.7)",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              backdropFilter: "blur(3.92708px)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <ClearIcon></ClearIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                Portfolio: no
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <DoneIcon></DoneIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                10+ years exp in ML DevOps
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <ClearIcon></ClearIcon>{" "}
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "text.primary",
                  ml: 1,
                  mb: 2,
                  my: 2,
                  textAlign: "center",
                }}
                variant="body2"
              >
                ML DevOps
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <DashboardLeft></DashboardLeft>
        <DashboardMiddle></DashboardMiddle>
        <DashboardRight></DashboardRight>
      </Box>
    </Layout>
  );
}
