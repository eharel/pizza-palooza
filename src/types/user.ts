export interface UserState {
  username: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  position: {
    latitude: number;
    longitude: number;
  };
  address: string;
  error: string;
}

// You can add more user-related types here as needed
// For example:
// export interface UserCredentials {
//   email: string;
//   password: string;
// }
