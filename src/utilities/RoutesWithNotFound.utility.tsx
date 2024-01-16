import { Route, Routes } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

export const RoutesWithNotfound = ({ children }: Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<>Not Found</>} />
        </Routes>
    )
}

export default RoutesWithNotfound;