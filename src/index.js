import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

// react dom은 가장 상위에 있는 component를 root id를 가지는 요소에 넣어주는 (연결해주는) 라이브러리
ReactDOM.render(
  // strick mode 사용하여 잘못하거나 위험한 상황에서 에러메세지 띄움
  // 배포 버전에서는 나오지 않음
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
