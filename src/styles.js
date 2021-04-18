import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    container: {

        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing(8, 0, 6),
        title: { flexGrow: 1, },
    }
}));

export default useStyles;