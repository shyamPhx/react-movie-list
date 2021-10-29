import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Colorlist() {
  const [color, setcolor] = useState("white");
  // setcolor will help to change a color.
  const styles = { backgroundColor: color, color: "black" };
  const INITIAL_COLORS = ["crimson", "aquamarine", "limegreen", "grey", "brown"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  return (
    <div className="colors">

      <TextField
        className="text-field"
        value={color}
        style={styles}
        onChange={(event) => setcolor(event.target.value)}
        label="Enter a Color"
        variant="outlined" />
      <Button onClick={() => setColors([...colors, color])} variant="contained">Add color</Button>


      {colors.map((clr, index) => (
        <Colorbox
          key={index}
          color={clr} />
      ))}
    </div>
  );
}
function Colorbox({ color }) {
  const styles = {
    height: "60px",
    width: "180px",
    background: color,
    margin: "10px 5px",
  };
  return (
    <div style={styles}></div>
  );
}
