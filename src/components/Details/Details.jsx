import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useContext } from "react";
import useTranscations from "./../../useTransactions";
import useStyles from "./styles";

const Details = ({ title }) => {
  const { total, chartData } = useTranscations(title);
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
