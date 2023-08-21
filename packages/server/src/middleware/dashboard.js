module.exports = function () {
  return (ctx) => {
    ctx.type = 'html';
    ctx.body = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Waline Management System</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
  </head>
  <body>
    <script>
    window.SITE_URL = ${JSON.stringify(process.env.SITE_URL)};
    window.SITE_NAME = ${JSON.stringify(process.env.SITE_NAME)};
    </script>
    <script src="https://www.techgrow.cn/lib/@waline/admin/admin@0.18.0.js"></script>
  </body>
</html>`;
  };
};
