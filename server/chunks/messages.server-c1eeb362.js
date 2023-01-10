import { w as writable } from './index2-82a1cf3c.js';
import { g as getIterator } from './clients.server-f8368f99.js';
import { g as get_store_value } from './index-69bb72c3.js';

const messages = writable([]);
function getMessages() {
  return get_store_value(messages);
}
function addMessage(message) {
  messages.update((list) => list.concat([`${new Date().toLocaleTimeString().toLowerCase()} ${message}`]));
}
messages.subscribe((list) => {
  if (list.length > 0) {
    const latestMessage = list[list.length - 1];
    for (const [, controller] of getIterator()) {
      controller.enqueue(`data:${JSON.stringify(latestMessage)}

`);
    }
  }
});

export { addMessage as a, getMessages as g };
//# sourceMappingURL=messages.server-c1eeb362.js.map
