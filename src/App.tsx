import * as React from "react"
import { Outlet } from "react-router-dom"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Navbar from "./Components/Navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Outlet />
  </ChakraProvider>
)
