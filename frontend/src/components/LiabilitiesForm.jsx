import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

const LiabilityForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return; // keep it solid with simple validation

    onAdd({ name, amount: Number(amount), description });
    // reset fields after submit
    setName("");
    setAmount("");
    setDescription("");
  };

  return (
    <Paper sx={{ p: 3, mb: 3, bgcolor: "#1e1e2f", color: "#fff", boxShadow: '0 0 15px #FFD700', borderRadius: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, color: "#FFD700", fontWeight: "bold", textAlign: "center" }}>
        Add New Liability
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Liability Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          margin="normal"
          sx={{ input: { color: "#fff" }, label: { color: "#FFD700" } }}
          autoFocus
        />
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          required
          type="number"
          margin="normal"
          sx={{ input: { color: "#fff" }, label: { color: "#FFD700" } }}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={2}
          margin="normal"
          sx={{ input: { color: "#fff" }, label: { color: "#FFD700" } }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#e6c200" },
          }}
        >
          Add Liability
        </Button>
      </form>
    </Paper>
  );
};

export default LiabilityForm;
