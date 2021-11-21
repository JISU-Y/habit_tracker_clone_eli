import React, { useState, useRef, useCallback, useEffect } from "react"

const SimpleHabit = () => {
  // 클래스 형에서는 멤버변수는 한번만 만들어지고,
  // 업데이트 될 때 render() 안에 있는 내용만 반복되는데,

  // 함수형에서는 arrow 가 가리키는 범위 모두가 반복이 됨
  // useState는 계속 반복되어 실행되도 메모리에 리액트가 알아서
  // 저장해놓고 그 값을 불러오기 때문에 게속 0으로 초기화 되거나 하지 않는다
  const [count, setCount] = useState(0)
  // 클래스형에서 createRef 를 쓰면 함수형 안에서는 계속 새로 생성하기 때문에
  // 함수형에서는 useRef를 쓴다
  const spanRef = useRef()

  // useCallback // 이해안감..
  const handleIncrement = useCallback(() => {
    setCount(count + 1)
  })

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`)
  }, [])

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  )
}

export default SimpleHabit
