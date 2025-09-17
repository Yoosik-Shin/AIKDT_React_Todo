import { useState } from 'react'

const Card = ({ todo, onToggle, onRemove }) => {
    // 🧊 state
    // const [status, setStatus] = useState(todo.status)

    let {id, name, status} = todo
    let isActive = status ? 'todoItem active' : 'todoItem'

    // 체크박스 변경 핸들러 ➡ List 부모 컴포넌트로 전환 예정
    // const onChange = (e) => {
    //     const newStatus = e.target.checked
    //     setStatus(newStatus)
    // }

    return (
        <li className={isActive}>
            <div className="item">
                <input type="checkbox" id={id} checked={status}
                        onChange={() => onToggle(todo)} /> {/* 함수형태로 넣어줘야 온체인지 이벤트가 발생할때, 온토글이 실행 */}
                <label htmlFor={id}></label>
                <span>{ name }</span>
            </div>
            <div className="item">
                <button className='btn' onClick={() => onRemove(id)}>삭제</button>
            </div>
        </li>
    )
}

export default Card