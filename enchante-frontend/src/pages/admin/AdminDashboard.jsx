import { Tabs } from "@mui/material";
import RootContainer from "../../components/layout/RootContainer";

const AdminDashboard = () => {
    return (
        <RootContainer>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                // value={value}
                // onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
            ></Tabs>
        </RootContainer>
    );
};

export default AdminDashboard;
