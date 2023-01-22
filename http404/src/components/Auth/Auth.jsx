import { Outlet } from "react-router-dom";

export function Auth() {
  return (
    <>
      <h2 style={{paddingTop: "150px"}}>Panel Klienta</h2>
      <Outlet />;
    </>
  );
}