import { Outlet } from "react-router-dom"
import { LastReleases } from "../../components/HighlightsBooks"
import { UserAccountMenu } from "../../components/UserAccountMenu"

export const UserAccount = () => {
  return (
    <>
      <h2 className="font-bold text-white text-lg leading-7 text-center mb-20 py-4 bg-gradient-to-r from-blue-700 to-blue-200">Minha conta</h2>
      <UserAccountMenu />
      <Outlet />
      {/* <LastReleases /> */}
    </>
  )
}