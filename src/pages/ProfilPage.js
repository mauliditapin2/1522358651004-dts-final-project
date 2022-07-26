import React, { useEffect, useState } from "react";
import NavBar from "../containers/NavBar";
import Footer from "../components/Footer";
import { Box, Button, Paper, TextField } from "@mui/material";
import { db } from "../firebase/firebase";
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
const q=query(collection(db,'todos'),orderBy('timestamp','desc'));
export default function ProfilPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div>
      <NavBar />
      <Paper>
        haha 
        <Box>
          <form>
            <TextField
              id="outlined-basic"
              label="Make Todo"
              variant="outlined"
              style={{ margin: "0px 5px" }}
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={addTodo}>
              Add Todo
            </Button>
          </form>
        </Box>
        {todos.map((berita) => {
          return (
            <Box sx={{ padding: "1em", margin: "auto" }}>cek : {berita.id}</Box>
          );
        })}
      </Paper>
      <Footer />
    </div>
  );
}
