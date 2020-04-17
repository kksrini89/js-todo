class TodoItem {
  constructor({ text, categoryId, isCompleted = false }) {
    this.id = `${new Date().getTime()}`;
    this.text = text;
    this.categoryId = categoryId;
    this.isCompleted = isCompleted;
    this.createdAt = Date.now();
    this.startedAt = null;
    this.endedAt = null;
  }
}

const Categories = {
  PERSONAL: 'Personal',
  WORK: 'Work',
  SIDE_BIZ: 'Side Projects',
};

Object.defineProperty(TodoItem, 'Categories', {
  value: Categories,
  writable: false,
});

class Category {
  constructor({ name }) {
    this.id = `${new Date().getTime()}`;
    this.name = name;
  }
}

export { TodoItem, Category, Categories };
