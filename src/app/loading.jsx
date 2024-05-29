import {CircularProgress} from "@mui/material"
export default function loading() {
  return (
    <div className="fixed top-0 left-0 bg-white w-full min-h-svh z-50 flex items-center justify-center"><CircularProgress color="secondary" /></div>
  )
}
