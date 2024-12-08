import { TextField } from "@mui/material";

export const InputTime = (props) => {
  const { time, onChangeTime } = props;
  return (
    <div className="input-area">
      <TextField
        variant="outlined"
        placeholder="学習時間を入力してください"
        label="学習時間"
        value={time}
        onChange={onChangeTime}
      />
    </div>
  );
};
