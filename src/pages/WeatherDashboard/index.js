import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Icon,
  IconButton,
  Input,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AppTopBar from "../../components/AppBar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WaterRoundedIcon from '@mui/icons-material/WaterRounded';
import WbCloudyRoundedIcon from '@mui/icons-material/WbCloudyRounded';
import axios from "axios";
import dayjs from "dayjs"

import CircularProgress from "@mui/material/CircularProgress";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

const cityList = [
  {
    id: 2061990,
    name: "Salt Lake",
    latitude: -35.86667,
    longitude: 137.68333,
    elevation: 1,
    feature_code: "PPL",
    country_code: "AU",
    admin1_id: 2061327,
    admin2_id: 7839426,
    timezone: "Australia/Adelaide",
    country_id: 2077456,
    country: "Australia",
    admin1: "South Australia",
    admin2: "Kangaroo Island",
  },
  {
    id: 5489348,
    name: "Salt Lake",
    latitude: 34.45338,
    longitude: -108.7698,
    elevation: 1900,
    feature_code: "PPL",
    country_code: "US",
    admin1_id: 5481136,
    admin2_id: 5460788,
    timezone: "America/Denver",
    country_id: 6252001,
    country: "United States",
    admin1: "New Mexico",
    admin2: "Catron",
  },
  {
    id: 5780993,
    name: "Salt Lake City",
    latitude: 40.76078,
    longitude: -111.89105,
    elevation: 1299,
    feature_code: "PPLA",
    country_code: "US",
    admin1_id: 5549030,
    admin2_id: 5781004,
    timezone: "America/Denver",
    population: 192672,
    postcodes: [
      "84101",
      "84102",
      "84103",
      "84104",
      "84105",
      "84106",
      "84107",
      "84108",
      "84109",
      "84110",
      "84111",
      "84112",
      "84113",
      "84114",
      "84115",
      "84116",
      "84117",
      "84118",
      "84121",
      "84122",
      "84123",
      "84124",
      "84125",
      "84126",
      "84127",
      "84130",
      "84131",
      "84132",
      "84133",
      "84134",
      "84136",
      "84138",
      "84139",
      "84141",
      "84143",
      "84145",
      "84147",
      "84148",
      "84150",
      "84151",
      "84152",
      "84157",
      "84158",
      "84165",
      "84170",
      "84171",
      "84180",
      "84184",
      "84189",
      "84190",
      "84199",
    ],
    country_id: 6252001,
    country: "United States",
    admin1: "Utah",
    admin2: "Salt Lake",
  },
  {
    id: 1257591,
    name: "Salt Lake City",
    latitude: 22.58333,
    longitude: 88.41667,
    elevation: 7,
    feature_code: "PPL",
    country_code: "IN",
    admin1_id: 1252881,
    admin2_id: 8335144,
    timezone: "Asia/Kolkata",
    country_id: 1269750,
    country: "India",
    admin1: "West Bengal",
    admin2: "North 24 Parganas",
  },
  {
    id: 5781022,
    name: "Salt Lake View Addition",
    latitude: 40.63439,
    longitude: -112.06105,
    elevation: 1577,
    feature_code: "PPL",
    country_code: "US",
    admin1_id: 5549030,
    admin2_id: 5781004,
    timezone: "America/Denver",
    country_id: 6252001,
    country: "United States",
    admin1: "Utah",
    admin2: "Salt Lake",
  },
  {
    id: 4046496,
    name: "Rose Lake Dam",
    latitude: 29.64523,
    longitude: -97.64528,
    elevation: 114,
    feature_code: "DAM",
    country_code: "US",
    admin1_id: 4736286,
    admin2_id: 4695361,
    timezone: "America/Chicago",
    country_id: 6252001,
    country: "United States",
    admin1: "Texas",
    admin2: "Guadalupe",
  },
  {
    id: 5768813,
    name: "Salt Lake Dam",
    latitude: 45.85167,
    longitude: -103.25879,
    elevation: 883,
    feature_code: "DAM",
    country_code: "US",
    admin1_id: 5769223,
    admin2_id: 5765341,
    admin3_id: 5767510,
    timezone: "America/Denver",
    country_id: 6252001,
    country: "United States",
    admin1: "South Dakota",
    admin2: "Harding",
    admin3: "Unorganized Territory of North Harding",
  },
  {
    id: 5391456,
    name: "Salt Lake Park",
    latitude: 33.97418,
    longitude: -118.20646,
    elevation: 45,
    feature_code: "PRK",
    country_code: "US",
    admin1_id: 5332921,
    admin2_id: 5368381,
    timezone: "America/Los_Angeles",
    country_id: 6252001,
    country: "United States",
    admin1: "California",
    admin2: "Los Angeles",
  },
  {
    id: 5781000,
    name: "Salt Lake City KOA",
    latitude: 40.77161,
    longitude: -111.92994,
    elevation: 1287,
    feature_code: "PRK",
    country_code: "US",
    admin1_id: 5549030,
    admin2_id: 5781004,
    timezone: "America/Denver",
    country_id: 6252001,
    country: "United States",
    admin1: "Utah",
    admin2: "Salt Lake",
  },
  {
    id: 5780998,
    name: "Salt Lake City Heliport",
    latitude: 40.78161,
    longitude: -111.95911,
    elevation: 1286,
    feature_code: "AIRH",
    country_code: "US",
    admin1_id: 5549030,
    admin2_id: 5781004,
    timezone: "America/Denver",
    country_id: 6252001,
    country: "United States",
    admin1: "Utah",
    admin2: "Salt Lake",
  },
];

const WeatherDashboard = () => {
  const [cityInput, setCityInput] = useState("");
  const [cityQuery, setCityQuery] = useState(""); // debounced city name
  const [myLatitude, setMyLatitute] = useState("");
  const [myLongitude, setMyLongitute] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  const [weatherData, setWeatherData] = useState(null);

  console.log({ weatherData });

  const getWeatherByCity = (cityName) => {
    console.log({ cityName });
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: cityName,
          appid: "d98411a21a90bab401b28d9346819bba",
          units: "metric",
        },
      })
      .then((res) => {
        console.log("Weather by city", res.data);
        setWeatherData(res?.data);
      })
      .catch((err) => {
        console.log("Weather by city error", err);
        setWeatherData(null);
      });
  };

  const getWeatherByCoordinates = (coords) => {
    console.log({ coords });
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: coords?.latitude,
          lon: coords?.longitude,
          appid: "d98411a21a90bab401b28d9346819bba",
          units: "metric",
        },
      })
      .then((res) => {
        console.log("Weather by Coordinates", res.data);
        setWeatherData(res?.data);
      })
      .catch((err) => {
        console.log("Weather by Coordinates error", err);
        setWeatherData(null);
      });
  };

  const getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        (position) => {
          setMyLatitute(position.coords.latitude);
          setMyLongitute(position.coords.longitude);
          getWeatherByCoordinates(position.coords);
        },
        (error) => {
          // this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
          console.log("error", error);
        }
      );
    }
  };

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  //   const loading = open && options.length === 0;
  let loading = false;

  console.log({ options });

  useEffect(() => {
    getMyLocation();
  }, []);

  React.useEffect(() => {
    if (options?.length <= 0) {
      setOpen(false);
    }
  }, [options]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCityQuery(cityInput);
      fetchCityListSuggestions(cityInput);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [cityInput]);

  const fetchCityListSuggestions = (city = cityQuery) => {
    if (city === "") return;

    let params = {
      name: city,
      count: 10,
      language: "en",
      format: "json",
    };

    axios
      .get(`https://geocoding-api.open-meteo.com/v1/search`, { params })
      .then((response) => {
        console.log({ response });
        if (response.status === 200) {
          if (response?.data?.results && response?.data?.results?.length > 0) {
            setOptions(response?.data?.results);
          } else {
            setOptions([]);
          }
        } else {
          setOptions([]);
        }
      })
      .catch((err) => {
        console.log("error: " + err);
        setOptions([]);
      });
  };

  console.log({ open, loading, cityInput, cityQuery });

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const currentDateTime = dayjs().format('dddd, D MMMM [at] hh:mm A');


  return (
    <>
      <Box>
        <AppTopBar />
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pt: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" >Weather Dashboard</Typography>
          <Paper
            component="form"
            sx={{ p: "4px 16px", display: "flex", alignItems: "center", borderRadius: "40px",  boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.3)"}}
            onSubmit={(e) => {
              e.preventDefault();
              getWeatherByCity(cityInput);
            }}
          >
            <Autocomplete
              // freeSolo
              // disableClearable
              clearOnBlur={false}
              // inputValue={cityInput}
              // onInputChange={(e)=> {
              //     setCityInput(e.target.value)
              // }}

              onChange={(event, value) => {
                console.log("change", value);
                setSelectedCity(value);
                if (!!value) {
                  getWeatherByCoordinates(value);
                }
              }}
              id="asynchronous-demo"
              componentsProps={{
                paper: {
                  sx: {
                    // maxWidth: '150%',
                    position: "absolute",
                    // px:'16px',
                    // left:'-40px',
                    left: 0,
                    right: -60,
                    top: "10px",
                    // outline:"2px solid blue"
                  },
                },
              }}
              sx={{
                width: "40vw",
                maxWidth: 300,
                border: "none",
                position: "relative",
              }}
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              getOptionLabel={(option) => option?.name || option}
              renderOption={(props, option) => (
                <li {...props} key={option?.id}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      width={36}
                      height={36}
                      src={`https://open-meteo.com/images/country-flags/${option?.country_code}.svg`}
                      style={{ paddingRight: "4px" }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <div>{option?.name}</div>
                      <Typography variant="caption">
                        {option?.admin1 ? `${option?.admin1}` : ""}{" "}
                        {option?.admin2 ? `| ${option?.admin2}` : ""}
                      </Typography>
                    </Box>
                  </Box>
                </li>
              )}
              // renderOption={(obj, option) => {
              //     console.log('render option', {obj, option})
              //     return (
              //       <>
              //         <div>
              //           {option.name} {option.country}
              //           <div>
              //             {option.admin1}
              //           </div>
              //         </div>
              //       </>
              //     );
              //   }}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => {
                    setCityInput(e.target.value);
                  }}
                  value={cityInput}
                  placeholder="Enter city name to search"
                  variant="standard"
                  InputProps={{
                    ...params.InputProps,
                    // type: 'search',
                    startAdornment: (
                      <>
                        {selectedCity?.country_code ? (
                          <img
                            width={32}
                            height={32}
                            src={`https://open-meteo.com/images/country-flags/${selectedCity?.country_code}.svg`}
                            style={{ paddingRight: "4px" }}
                          />
                        ) : (
                          <IconButton>
                            <LocationOnRoundedIcon />
                          </IconButton>
                        )}
                      </>
                    ),
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={10} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                    disableUnderline: true,
                  }}
                />
              )}
            />

            <IconButton
              color="primary"
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => {
                getWeatherByCity(cityInput);
              }}
            >
              <SearchRoundedIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
              onClick={getMyLocation}
            >
              <MyLocationRoundedIcon />
            </IconButton>
          </Paper>

          <Divider />

          {weatherData ? 
          <Box>
            <Typography variant="h5">Weather in <b> {weatherData?.name}, {weatherData?.sys?.country} </b></Typography> 
           <Typography variant="h6">{currentDateTime}</Typography> 
          </Box>
          
          : null}

          {weatherData ? (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap:"wrap" }}>
              <WeatherSummary data={weatherData} />
              <WeatherPointsList data={weatherData} />
              <SunTiming data={weatherData}/>
            </Box>
          ) : null}
          
        </Container>
      </Box>
    </>
  );
};

const WeatherSummary = ({ data }) => {
  return (
    <Card sx={{ height: "180px",  p: 2, flex:1, minWidth:"340px", background:"#bfedfb", borderRadius:"10px", boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.3)", border:"1px solid rgba(0, 0, 0, 0.175)"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // height: "min-content",
          gap: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Typography variant="h3">{data?.main?.temp}°C</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              alignItems: "end",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2">High</Typography>
              <Typography variant="h6">{data?.main?.temp_max}°C</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2">Low</Typography>
              <Typography variant="h6">{data?.main?.temp_min}°C</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // gap: 4,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography variant="body">{data?.weather?.[0]?.main}</Typography>
            <Typography variant="body">
              Feels like {data?.main?.feels_like}
            </Typography>
            <Typography variant="body">
              {getWeatherMessage(data?.weather?.[0]?.main)}
            </Typography>
          </Box>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
            width={80}
            height={80}
          />
        </Box>
      </Box>
    </Card>
  );
};

const WeatherPointsList = ( {data}) => {
  return (
    <Card sx={{ height: "180px",  p: 2, flex: 1, minWidth:'220px', background:"rgba(198, 241, 217, 0.4)", borderRadius:"10px", boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.3)", border:"1px solid rgba(0, 0, 0, 0.175)" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // height: "min-content",
          gap: 1,
          height:"100%"
        }}
      >

        <Box sx={{display:"flex", justifyContent:"space-between", gap:8, flex:1}}>
          <Typography>Visibility</Typography>
          <Box sx={{display:"flex", gap:1}}>
            <Typography>{data?.visibility / 1000} km </Typography>
            <VisibilityOffRoundedIcon />
          </Box>
        </Box>
        {/* <Divider /> */}
        {/* <Box sx={{display:"flex", justifyContent:"space-between", gap:8}}>
          <Typography>Dew Point</Typography>
          <Typography>23%</Typography>
        </Box>
        <Divider /> */}
        <Box sx={{display:"flex", justifyContent:"space-between", gap:8, flex:1}}>
          <Typography>Wind</Typography>
          <Box sx={{display:"flex", gap:1}}>
            <Typography>{parseInt(data?.wind?.speed)} km/h</Typography>
            <AirRoundedIcon />
          </Box>
        </Box>
        {/* <Divider /> */}
        <Box sx={{display:"flex", justifyContent:"space-between", gap:8, flex:1}}>
          <Typography>Humidity</Typography>
          <Box sx={{display:"flex", gap:1}}>
            <Typography>{data?.main?.humidity}%  </Typography>
            <WaterRoundedIcon />
          </Box>
        </Box>
        {/* <Divider /> */}
        <Box sx={{display:"flex", justifyContent:"space-between", gap:8, flex:1}}>
          <Typography>Cloudiness</Typography>
          <Box sx={{display:"flex", gap:1}}>
            <Typography>{data?.clouds?.all}%  </Typography>
            <WbCloudyRoundedIcon />
          </Box>
        </Box>
     

       </Box>
    </Card>
  )
}

const SunTiming = ({ data}) => {
  const sunriseFormatted = dayjs.unix(data?.sys.sunrise).format('hh:mm A');
  const sunsetFormatted = dayjs.unix(data?.sys.sunset).format('hh:mm A');


  return (
    <Card sx={{ height:"180px",   p: 2, flex: 1, minWidth:'100px', borderRadius:"10px", boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.3)", border:"1px solid #800000"}} className="gradient-background">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // height: "min-content",
          // gap: 1,
          height:'100%'
        }}
      >

        <Box sx={{display:"flex", flexDirection: "column",
 justifyContent:"space-between", alignItems:"center" }}>
          <WbSunnyRoundedIcon fontSize="large"/>
          <Typography>Sunrise</Typography>
          <Typography variant="h6">{sunriseFormatted} </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection: "column", justifyContent:"space-between", alignItems:"center"  }}>
          <WbTwilightRoundedIcon fontSize="large"/>
          <Typography>Sunset</Typography>
          <Typography variant="h6">{sunsetFormatted}</Typography>
        </Box>
       
     

       </Box>
    </Card>
  )
}

const getWeatherMessage = function (data) {
  const weatherType = data;

  switch (weatherType) {
    case "Rain":
    case "Drizzle":
    case "Clouds":
      return `Umbrella Required`;
      break;
    case "Thunderstorm":
    case "Tornado":
      return `Stay Indoors`;
      break;
    case "Snow":
      return "Dress Warm";
      break;
    case "Clear":
      return "Ideal Conditions";
      break;
    case "Mist":
    case "Fog":
    case "Haze":
      return `Poor Visibility`;
      break;
    default:
      return `Poor Air Quality`;
  }
};



export default WeatherDashboard;
