import React, { PureComponent, createRef, memo } from "react"

// function component (함수형 컴포넌트) / rsi
// memo는 pureComponent 같은 것
const HabitAddForm = memo((props) => {
  const formRef = createRef()
  const inputRef = createRef() // createRef로 inputRef 멤버 변수 정의

  const onSubmit = (e) => {
    // submit 이벤트가 발생하면 다른 페이지로 이동하거나
    // 데이터를 가져와서 렌더가 보통 되기 때문에
    // 화면이 렌더링된다. 따라서 그걸 막으려면 preventDefault 써줘야 한다.
    e.preventDefault()
    console.log()
    const name = inputRef.current.value
    // name이 있으면(undefined나 null이 아니면) add할 수 있게 인자 넘겨줌
    name && props.onAdd(name) // Habits 컴포넌트에서 온 아이(handleAdd)
    inputRef.current.value = "" // input 초기화
    // form으로 이것도 됨
    // this.formRef.current.reset()
  }
  return (
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input type="text" className="add-input" placeholder="Habit" ref={inputRef} />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  )
})

export default HabitAddForm

// 클래스형
// // PureComponent를 상속받으면 불필요한 렌더가 없어진다
// // shouldComponentUpdate() 함수가 내장되어 있어
// // 이전의 prop과 현재의 state를 비교(얇은 비교;안의 내용이 아니라 오브젝트의 변화만 없으면 같은 것으로 간주)하여
// // 업데이트가 필요하면 true, 아니면 false를 리턴하여 render함수 실행여부를 결정한다.
// // 따라서 Component를 썻을 때와 렌더링이 덜 나게 될 수 있다.
// export default class HabitAddForm extends PureComponent {
//   formRef = createRef()
//   inputRef = createRef() // createRef로 inputRef 멤버 변수 정의

//   onSubmit = (e) => {
//     // submit 이벤트가 발생하면 다른 페이지로 이동하거나
//     // 데이터를 가져와서 렌더가 보통 되기 때문에
//     // 화면이 렌더링된다. 따라서 그걸 막으려면 preventDefault 써줘야 한다.
//     e.preventDefault()
//     console.log()
//     const name = this.inputRef.current.value
//     // name이 있으면(undefined나 null이 아니면) add할 수 있게 인자 넘겨줌
//     name && this.props.onAdd(name) // Habits 컴포넌트에서 온 아이(handleAdd)
//     this.inputRef.current.value = "" // input 초기화
//     // form으로 이것도 됨
//     // this.formRef.current.reset()
//   }
//   render() {
//     console.log("HabitAddForm")

//     return (
//       <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
//         <input type="text" className="add-input" placeholder="Habit" ref={this.inputRef} />
//         <button className="add-button" type="submit">
//           Add
//         </button>
//       </form>
//     )
//   }
// }
