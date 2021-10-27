import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div className="like-dislike">
      <IconButton onClick={() => setlike(like + 1)} color="primary" aria-label="upload picture" component="span">
        <Badge className="btn1" badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>



      <IconButton onClick={() => setdislike(dislike + 1)} color="primary" aria-label="upload picture" component="span">
        <Badge className="btn2" badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>


    </div>
  );
}
