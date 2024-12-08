import { Box, TextField } from "@mui/material";

export const InputArea = (props) => {
  const { content, time, onChangeContent, onChangeTime } = props;
  return (
    <>
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
        <div className="input-area">
          <TextField
            variant="outlined"
            placeholder="学習内容を入力してください"
            label="学習内容"
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <div className="input-area">
          <TextField
            variant="outlined"
            placeholder="学習時間を入力してください"
            label="学習時間"
            value={time}
            onChange={onChangeTime}
          />
        </div>
      </Box>
    </>
  );
};
