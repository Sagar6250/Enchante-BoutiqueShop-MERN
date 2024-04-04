import { Box, Stack, Typography } from "@mui/material";
import theme from "../../theme";

const CollectionCard = ({ key, id, image, name, description }) => {
    var bgcolor = [
        theme.palette.primary.main,
        theme.palette.secondary.light,
        theme.palette.tertiary.main,
        theme.palette.tertiary.light,
        theme.palette.quaternary.main,
        theme.palette.primary.main,
        theme.palette.secondary.light,
        theme.palette.tertiary.main,
        theme.palette.tertiary.light,
        theme.palette.quaternary.main,
    ];
    var bgColor = [...bgcolor].sort(() => 0.5 - Math.random());
    return (
        <Stack
            sx={{
                // height: 315,
                width: "100%",
                backgroundColor: bgColor[id],
                py: "1rem",
            }}
            direction={id % 2 == 0 ? "row" : "row-reverse"}
            spacing={2}
            justifyContent="space-around"
            alignItems="center"
        >
            {/* <Box width="10%"> */}
            <img
                src={image}
                alt=""
                style={{ objectFit: "cover", height: 315, width: 445 }}
            />
            {/* </Box> */}
            <Box width="40%">
                <Stack alignItems="center">
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="body2">{description}</Typography>
                </Stack>
            </Box>
        </Stack>
    );
};

export default CollectionCard;
