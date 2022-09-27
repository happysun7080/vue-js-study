// reactive: 객체에 반응성 추가
// toRefs: 객체 내부 속성들 모두에게 반응성 추가
import { reactive, toRefs } from 'vue'

// KEY: localStorage에서 데이터를 저장할 KEY
// storage_obj: 일정 리스트를 가질 todos 속성과 신규 id를 책정할 수 있는 storage_id 속성을 가진 객체
// loadTodos: localStorage로부터 데이터를 불러오는 함수
// saveTodos: localStorage로부터 데이터를 저장하는 함수
export const useStorage = () => {
    const KEY = 'my-todo-list'
    const storage_obj = reactive({ storage_id: 0 })
    const loadTodos = (initTodos) => {
        // localStorage는 Window 오브젝트의 읽기전용 속성으로 데이터를 브라우저에서 읽어오거나 저장할 수 있게 함
        // 데이터를 저장/조회하기 위한 getItem, setItem 함수 제공
        // 키-값 형식으로 데이터 저장
        // clear와 removeItem 함수 제공
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
        temp_todos.forEach((todo, idx) => {
            todo.id = idx
        })
        storage_obj.storage_id = temp_todos.length
        initTodos(temp_todos)
    }
    const saveTodos = (todos) => {
        localStorage.setItem(KEY, JSON.stringify(todos.value))
    }

    // 외부로 노출할 변수들
    return {
        // Spread Operator(...): 객체 혹은 배열의 속성/값들을 꺼내주는 역할
        // 따라서 storage_obj의 속성인 storage_id가 반환됨
        ...toRefs(storage_obj),
        loadTodos,
        saveTodos,
    }
}