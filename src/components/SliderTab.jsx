import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SliderItem from "./SliderItem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SliderTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="technology" {...a11yProps(0)} />
          <Tab label="business" {...a11yProps(1)} />
          <Tab label="health" {...a11yProps(2)} />
          <Tab label="science" {...a11yProps(3)} />
          <Tab label="sports" {...a11yProps(4)} />
          <Tab label="entertainment" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SliderItem type="technology" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SliderItem type="business" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SliderItem type="health" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SliderItem type="science" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SliderItem type="sports" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SliderItem type="entertainment" />
      </TabPanel>
    </Box>
  );
}
