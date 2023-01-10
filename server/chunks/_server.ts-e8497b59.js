import { a as addMessage } from './messages.server-c1eeb362.js';
import './index2-82a1cf3c.js';
import './index-69bb72c3.js';
import './clients.server-f8368f99.js';

const POST = async function POST2({ request }) {
  addMessage(await request.json());
  return new Response();
};

export { POST };
//# sourceMappingURL=_server.ts-e8497b59.js.map
