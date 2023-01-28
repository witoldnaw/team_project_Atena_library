import { Outlet } from "react-router-dom";

export function UserProfile() {
    return (
        <>
            <h2 style={{ paddingTop: "150px" }}>Panel Klienta</h2>
            <Outlet />;
        </>
    );
}

// kontekst zrobić

// useState funkcja w firebase
