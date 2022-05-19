import React, { useState } from 'react';

// styles & components
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function FollowersFollowing() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const tabsContent = [<Box key={0}>Followers Content</Box>, <Box key={1}>Following Content</Box>];

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabValue} onChange={handleChange} variant="fullWidth">
        <Tab value={0} label="Followers" />
        <Tab value={1} label="Following" />
      </Tabs>
      {tabsContent[tabValue]}
    </Box>
  );
}
