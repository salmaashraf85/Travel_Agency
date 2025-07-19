import React from "react";
import { Grid, TextField, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";
import {Buttons} from './showButton';
import {TopTabs} from './Tabs';

export const BookForm = () => {
  const [departure, setDeparture] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [tripType, setTripType] = useState("Return");
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TopTabs></TopTabs>
      <Grid container spacing={2} mt={2} ml={5}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="From - To"
            variant="outlined"
            defaultValue="Cairo - Alex"
          />
        </Grid>

        <Grid item xs={6} md={2}>
          <TextField
            fullWidth
            label="Trip"
            select
            SelectProps={{ native: true }}
             onChange={(e) => setTripType(e.target.value)}
          >
            <option>Return</option>
            <option>One Way</option>
          </TextField>
        </Grid>

        <Grid item xs={6} md={3}>
          <Box display="flex" gap={1}>
            <DatePicker
              label="Depart"
              value={departure}
              onChange={(newValue) => setDeparture(newValue)}
              slotProps={{ textField: { fullWidth: true } }}
            />
            <DatePicker
              label="Return"
              value={returnDate}
              onChange={(newValue) => setReturnDate(newValue)}
              slotProps={{ textField: { fullWidth: true, disabled: tripType === "One Way" }}}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Passenger - Class"
            variant="outlined"
            defaultValue="1 Passenger, Economy"
          />
        </Grid>
      </Grid>
          <Buttons></Buttons> 
        
    </LocalizationProvider>
  );
};
