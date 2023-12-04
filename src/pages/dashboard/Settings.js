import { useTheme } from "@mui/material/styles";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";

const Settings = () => {
  const theme = useTheme();
  return (
    <>
      <Stack>
        {/* Left Pannel */}
        <Box
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
            height: "100vh",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color="#4B4B4B" />
              </IconButton>
              <Typography variant="h6">Settings</Typography>
            </Stack>
            {/* Profile */}
            <Stack direction={"row"} spacing={3}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />
              <Stack spacing={0.5}>
<Typography variant="article">
{faker.name.fullName()}
</Typography>
<Typography variant="body2">
{faker.random.words()}
</Typography>
              </Stack>
            </Stack>
            {/* List of options */}
          </Stack>
        </Box>
        {/* Right Pannel */}
      </Stack>
    </>
  );
};

export default Settings;
