import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";
import useStyles from "./styles";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="with speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance: ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* info */}
          Try saying: Add income for $100 in category salary for monday
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardcontent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
