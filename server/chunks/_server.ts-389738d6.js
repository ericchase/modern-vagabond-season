import { a as addClient, r as removeClient } from './clients.server-f8368f99.js';

const GET = async function GET2({ request }) {
  if (request.headers.get("accept") === "text/event-stream") {
    const id = Symbol();
    const stream = new ReadableStream({
      start(controller) {
        addClient(id, controller);
        controller.enqueue("id: 0\n\n");
      },
      cancel() {
        removeClient(id);
      }
    });
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream"
      }
    });
  } else {
    return new Response("Page not Found", { status: 404 });
  }
};

export { GET };
//# sourceMappingURL=_server.ts-389738d6.js.map
