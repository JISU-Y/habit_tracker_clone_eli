import React, { Component } from "react"
import Habit from "./Habit"
import HabitAddForm from "./HabitAddForm"

export default class Habits extends Component {
  componentDidMount() {
    //
  }
  // 클래스형에서 멤버 변수는 딱 한 번 만들어진다.

  handleIncrement = (habit) => {
    this.props.onIncrement(habit)
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(habit)
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit)
  }

  handleAdd = (name) => {
    this.props.onAdd(name)
  }

  // onReset은 어차피 인자를 넘겨주지 않아도 되므로 따로 멤버 변수 미생성

  render() {
    console.log("Habits")

    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => {
            // 각각의 컴포넌트에 id를 부여해야함
            // 자식의 컴포넌트가 어떤 것이 바뀌었는지 알게되면
            // 렌더링 등 좋기 때문에?? 해야한다. => 자세히 알아보기
            // 배열의 인덱스를 사용하면 안됨..
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            )
          })}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    )
  }
}
