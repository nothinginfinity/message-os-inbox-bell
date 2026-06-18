const VERSION = '0.1.0';

export default {
  async fetch(request, env) {
    return Response.json({ ok: true, version: VERSION });
  }
};
