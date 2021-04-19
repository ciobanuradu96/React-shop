import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    title: {
        flexGrow: 1,
    },
    media: {
        height: 100,
        paddingTop: '100%',
    },
    fullHeightCard: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
}));

export default useStyles;