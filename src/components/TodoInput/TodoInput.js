import React from 'react'
import classnames from 'classnames'

const TodoInput = ({value, onChange, onInsert}) => {


    return (
        <div className={classnames('todo-input')}>
            <input />
            <div>추가</div>
        </div>
    )
}

export default TodoInput