import { PrivateRoutes } from "@/models"
import { Navigate, Route } from "react-router-dom"
import { Dashboard, Home } from "@/pages"
import { RoutesWithNotFound } from "@/utilities"

export const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
        </RoutesWithNotFound>
    )
}
