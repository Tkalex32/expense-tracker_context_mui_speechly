import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { ExpenseTrackerContext } from "./../../../context/context";
import useStyles from "./styles";
import {
  incomeCategories,
  expenseCategories,
} from "./../../../constants/categories";

const initialState = {
  amount: 0,
  category: "",
  type: "Income",
  date: new Date().toISOString().split("T")[0],
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = {
      ...formData,
      id: uuid(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: +e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          type="date"
          label="Date"
          format="yyyy-MM-dd"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
