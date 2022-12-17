import { Route, Routes } from "react-router-dom"
import { Orders } from "./components/Orders"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"
import { NotFound } from "./pages/NotFound"
import { UserAccount } from "./pages/UserAccount"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/account" element={<UserAccount />}>
          <Route index element={<Orders />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
} 