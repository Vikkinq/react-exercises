import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ToDoItem({ data, remove, toggle }) {
  const labelId = `checkbox-list-label-${data.id}`;

  const toggleList = () => {
    toggle(data.id);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={remove}>
          <DeleteForeverIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={data.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggleList}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={data.text} />
      </ListItemButton>
    </ListItem>
  );
}
