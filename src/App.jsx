import { useState } from "react";
import "./App.css";

export const App = () => {
  // テストレコード
  const [records, setRecords] = useState([
    { title: "勉強の記録1", time: 1 },
    { title: "勉強の記録2", time: 3 },
    { title: "勉強の記録3", time: 5 },
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
      <div>
        <p className="title">学習記録</p>
      </div>
      <div className="input-area">
        学習内容
        <input
          placeholder="学習内容を入力してください"
          value={content}
          onChange={onChangeContent}
        />
      </div>
      <div className="input-area">
        学習時間
        <input
          placeholder="学習時間を入力してください"
          value={time}
          onChange={onChangeTime}
        />
      </div>
      <div>
        <button onClick={addRecord}>登録</button>
      </div>
      <div>
        <h2>学習記録一覧</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>学習内容</th>
              <th>学習時間(h)</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record}>
                <td>{record.title}</td>
                <td>{record.time}(h)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>学習合計時間</h2>
        <p>
          {records
            .map((record) => record.time)
            .reduce((a, b) => parseInt(a) + parseInt(b))}
          時間
        </p>
      </div>
    </>
  );
};
