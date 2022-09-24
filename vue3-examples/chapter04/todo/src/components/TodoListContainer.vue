<template></template>

<script>
import { ref, readonly, provide } from "vue";

export default {
  name: "TodoListContainer",
  setup() {
    // Todo 리스트를 가지는 변수. 반응성을 가질 수 있도록 ref 이용
    // 프록시 객체이므로 실제 배열값은 value를 통해 접근 가능
    const todos = ref([]);

    // todos 변수를 자식 컴포넌트들이 업데이트(변경)할 수 없도록 readonly 속성 부여
    provide("todos", readonly(todos));

    // localStorage로부터 todos 배열에 들어올 데이터를 불러오는 것은 Storage 모듈이 한다.
    // 따라서 해당 모듈이 데이터를 넣어줄 수 있는 함수인 initTodos 함수도 선언
    const initTodos = (init_todos) => {
      todos.value = init_todos;
    };

    // provide를 수행한 컴포넌트에서 업데이트도 함께 수행
    const addTodo = (todo, date) => {};
    const removeTodo = (id) => {};
    const completeTodo = (id) => {};

    provide("addTodo", addTodo);
    provide("removeTodo", removeTodo);
    provide("completeTodo", completeTodo);
  },
};
</script>

<style>
</style>