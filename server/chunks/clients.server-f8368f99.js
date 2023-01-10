const clients = /* @__PURE__ */ new Map();
function addClient(id, controller) {
  clients.set(id, controller);
}
function removeClient(id) {
  clients.delete(id);
}
function getIterator() {
  return clients[Symbol.iterator]();
}

export { addClient as a, getIterator as g, removeClient as r };
//# sourceMappingURL=clients.server-f8368f99.js.map
