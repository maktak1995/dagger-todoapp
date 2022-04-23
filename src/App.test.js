import { getNewTask } from './App';

test('新しいtaskを生成できる', () => {
  expect(getNewTask("testTask").name).toBe("testTask");
  expect(getNewTask("testTask").completed).toBe(false);
});