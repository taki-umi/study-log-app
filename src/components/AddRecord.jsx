import { Button } from "@mui/material";

export const AddRecord = (props) => {
  const { addRecord } = props;
  return (
    <div>
      <Button onClick={addRecord}>登録</Button>
    </div>
  );
};
