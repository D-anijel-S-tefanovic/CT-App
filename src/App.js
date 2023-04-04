import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function App() {
  const [word, setWord] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [responseData, setResponseData] = useState([]);

  const searchDictionary = () => {
    if (word === "") {
      setIsEmpty(true);
    } else {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
          setResponseData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center w-100 mt-5">
        <TextField
          error={isEmpty}
          id="outlined-basic"
          label={isEmpty ? "Error" : "Word"}
          variant="outlined"
          placeholder="Enter word"
          onChange={(e) => {
            setWord(e.target.value);
            setIsEmpty(false);
          }}
        />
      </div>
      <div className="d-flex flex-column align-items-center w-100 mt-5">
        <Button
          variant="outlined"
          onClick={() => {
            searchDictionary();
          }}
        >
          Submit
        </Button>
      </div>
      <div className="d-flex flex-column align-items-center w-100 mt-5">
        <List>
          {responseData.map((item) => (
            <ListItem>
              <ListItemButton>
                <ListItemText primary={item.word} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default App;
