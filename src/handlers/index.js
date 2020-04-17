import { TodoItem, Category } from './../models';

function addTodo() {
  const category = new Category({ name: TodoItem.Categories.SIDE_BIZ });
  const todo = new TodoItem({ text, categoryId: category.id });
  return todo;
}
