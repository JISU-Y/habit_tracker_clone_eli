import React, { PureComponent } from "react"
import "@fortawesome/fontawesome-free/js/all.js"

export default class Habit extends PureComponent {
  componentDidMount() {
    // mount 될 때
    console.log(`habit: ${this.props.habit.name} mount`)
  }
  componentWillUnmount() {
    // unmount 없어지기 직전 호출
    console.log(`habit: ${this.props.habit.name} will unmount`)
  }

  handleIncrement = () => {
    // props로 넘어온 함수에다가 인자만 전달
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }
  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    const { name, count } = this.props.habit
    console.log(`habit : ${name}`)
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}
