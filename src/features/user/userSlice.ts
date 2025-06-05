import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/user";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState: UserState = {
  username: "",
  status: "idle",
  position: {
    latitude: 0,
    longitude: 0,
  },
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername(state, action) {
      state.username = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.address = "";
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch address";
      });
  },
});

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: (positionObj as GeolocationPosition).coords.latitude,
    longitude: (positionObj as GeolocationPosition).coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
});

export function selectUsername() {
  return (state: { user: UserState }) => state.user.username;
}

export function selectAddress() {
  return (state: { user: UserState }) => state.user.address;
}

export function selectUser() {
  return (state: { user: UserState }) => state.user;
}

export const { updateUsername, updateAddress } = userSlice.actions;
export default userSlice.reducer;
