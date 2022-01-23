import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} md={3} order={{ md: 1, xs: 2 }}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} md={4} order={{ md: 2, xs: 1 }}>
          <Main />
        </Grid>
        <Grid item xs={12} md={3} order={{ md: 3, xs: 3 }}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
