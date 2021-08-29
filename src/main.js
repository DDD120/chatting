const Koa = require("koa");
const path = require("path");
const Pug = require("koa-pug");

const app = new Koa();
new Pug({
  viewPath: path.resolve(__dirname, "./views"),
  app: app,
});

app.use(async (ctx) => {
  await ctx.render("main");
});

app.listen(5000);
