import * as React from "react";
import {useState, useMemo} from "react";
// 【暗号：尼日利亚】
export default function UseMemoPage(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const expensive = useMemo(() => { // 修改
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]); // 修改
  return (
  <div>
    <h3>UseMemoPage</h3>
    <p>expensive:{ expensive }</p> {/* 修改 */}
    <p>{ count }</p>
    <button onClick={() => setCount(count + 1)}>add</button>
    <input value={ value } onChange={event => setValue(event.target.value)} />
  </div>
  );
}