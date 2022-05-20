import React, { useState } from 'react';

// styles & components
import { Styles as sx } from './Styles';
import Followers from './Components/Followers';
import Following from './Components/Following';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function FollowersFollowing() {
  const [tabValue, setTabValue] = useState(0);
  const tabsContent = [<Followers key={0} />, <Following key={1} />];
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={sx.root}>
      <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" sx={sx.tabs}>
        <Tab value={0} label="Followers" disableRipple />
        <Tab value={1} label="Following" disableRipple />
      </Tabs>
      {tabsContent[tabValue]}
    </Box>
  );
}
