import { useState } from "react";
import { InputArea } from "./components/InputArea";
import { AddRecord } from "./components/AddRecord";
import { StudyLogList } from "./components/StudyLogList";
import { Typography } from "@mui/material";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnVGtt19lYpE7oS2dJwDlSZHn9EZH8EYc",
  authDomain: "study-log-app-2b420.firebaseapp.com",
  projectId: "study-log-app-2b420",
  storageBucket: "study-log-app-2b420.firebasestorage.app",
  messagingSenderId: "346340035702",
  appId: "1:346340035702:web:c69869e79f37999d7e2357",
  measurementId: "G-T0D944CZG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const App = () => {
  // テストレコード
  const [records, setRecords] = useState([
    // { title: "勉強の記録1", time: 1 },
    // { title: "勉強の記録2", time: 3 },
    // { title: "勉強の記録3", time: 5 },
  ]);

  // 学習内容の変更
  const [content, setContent] = useState("");
  const onChangeContent = (e) => setContent(e.target.value);

  // 学習時間の変更
  const [time, setTime] = useState("");
  const onChangeTime = (e) => setTime(e.target.value);

  // 登録ボタンのクリック
  const addRecord = () => {
    // 学習内容と学習時間が入力されていない場合はアラートを表示
    if (!content || !time) {
      alert("学習内容と学習時間を入力してください");
      return;
    }

    // 学習時間が数値でない場合はアラートを表示
    if (isNaN(time)) {
      alert("学習時間は数値で入力してください");
      return;
    }
    const newRecord = { title: content, time: time };
    setRecords([...records, newRecord]);
    setContent("");
    setTime("");
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        学習記録アプリ
      </Typography>
      {/* 学習内容入力コンポーネント */}
      <InputArea
        content={content}
        time={time}
        onChangeContent={onChangeContent}
        onChangeTime={onChangeTime}
      />
      {/* 登録ボタン */}
      <AddRecord addRecord={addRecord} />
      {/* 学習記録一覧 */}
      <StudyLogList records={records} setRecords={setRecords} />
      <div>
        <Typography variant="h6" gutterBottom>
          学習合計時間
        </Typography>
        <p>
          {records.length !== 0
            ? records
                .map((record) => record.time)
                .reduce((a, b) => parseInt(a) + parseInt(b))
            : 0}
          時間
        </p>
      </div>
    </>
  );
};
