import { Dispatch, SetStateAction } from "react";

export interface LoginStatus {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}