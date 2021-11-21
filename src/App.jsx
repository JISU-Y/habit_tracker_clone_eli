import React, { Component } from "react"
import "./App.css"
import Habits from "./components/Habits"
import Navbar from "./components/Navbar"

export default class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  }
  // state (data)는 가장 상위인 여기 App 컴포넌트에 놓았다.
  // 때문에 여기서만 state를 수정할 수 있고
  // state를 수정할 수 있는 함수들도 여기서 정의하여
  // 인자들은 props로 넘겨준 그 하위 컴포넌트들에서 받아와서 수정한다.

  handleIncrement = (habit) => {
    // react에서 제공하는 setState 함수를 사용함으로써
    // react가 해당 state가 변경이 되었는지 안되었는지 알 수 있도록 한다.
    // this.setState({ count: this.state.habits.count + 1 })

    // 내가 구현
    // 이렇게 하는 것이 맞다.
    const newHabits = this.state.habits.map((el) => {
      return habit.id === el.id ? { ...habit, count: habit.count + 1 } : el
    })
    this.setState({ habits: newHabits })

    // 엘리 - 안좋은 코드. 오브젝트 안에 작은 데이터만 변경하는 것은
    // shallow comparison을 하는 react로서 그렇게 좋은 것이 아니다.
    // 따라서 전체 오브젝트를 업데이트?해주어야한다. ===========
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit) // index 확인
    // habits[index].count++ // 이것도 state를 직접 수정하는 것임 => 이러면 위험함, 수정해야함!***
    // this.setState({ habits }) // {habits: habits}이거와 같음
  }

  handleDecrement = (habit) => {
    // 이렇게 쓸 수 있으나
    // if (this.state.count > 0) {
    //   this.setState({ count: this.state.count - 1 })
    // }
    // 삼항연산자로 하자
    // const count = this.state.habits.count - 1
    // this.setState({ count: count < 0 ? 0 : count })

    // 내가 구현
    const newHabits = this.state.habits.map((el) => {
      return habit.id === el.id ? { ...habit, count: habit.count - 1 < 0 ? 0 : habit.count - 1 } : el
    })
    this.setState({ habits: newHabits })

    // 엘리
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // const count = habits[index].count - 1
    // habits[index].count = count < 0 ? 0 : count // 이것도 state를 직접 수정하는 것임
    // this.setState({ habits })
  }

  handleDelete = (habit) => {
    // 내가 구현
    // const newHabits = this.state.habits.filter((el) => habit.id !== el.id)
    // this.setState({ habits: newHabits })

    // 엘리
    const habits = this.state.habits.filter((item) => habit.id !== item.id)
    this.setState({ habits })
  }

  // 추가
  handleAdd = (name) => {
    // {id:Date.now(),name, count: 0}
    // 고유한 id(ms까지 포함되는 시간)이 포함된 객체를 habits 배열에 추가
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]
    this.setState({ habits })
  }

  // reset all
  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0
    //   return habit
    // })
    // 불필요한 render 방지
    const habits = this.state.habits.map((habit) => {
      // 이미 0이 아니라면 업데이트 할 필요 없음
      if (habit.count !== 0) return { ...habit, count: 0 }
      return habit
    })
    this.setState({ habits })
  }

  render() {
    console.log("App")
    return (
      <>
        <Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

// JSX란
// javascript 요소인데 html요소 같이 생김!??
// 그것을 JSX라고 부름
// 자바스크립트 코드 위에서 html 요소 처럼 사용할 수 있게 만든 것

// HTML과 JSX 차이
// html 요소는 class / jsx 는 className
// html 에서는 onclick / jsx는 onClick
// html은 마크업 언어, jsx는 엄밀히 말하면 자바스크립트 언어이다
// 따라서 jsx는 비즈니스 로직(중괄호를 이용해서 변수 등을 나타낼 수 있다), 자바스크립트 코드를 사용할 수 있다
// 나중에 바벨이 jsx를 변환해주는 것이다.
// jsx는 형제 노드를 가질 수 없다.
// 한 가지 노드로만 감싸져야 한다. (그냥 묶어줄 때는 div 태그 남발하지 말고 그냥 프래그먼트<></> 사용하기)

// 만약, 브라우저에서 요소를 확인했을 때,
// 동작할 때 DOM 요소가 엄청 많이 변한다 => 매우 잘못하고 있는 것!
// VDOM이 있으므로 바뀐 부분만 렌더가 되어야 하는데
// 잘못짜서 실제 돔 요소가 많이 바뀌는 것일 수 있음
