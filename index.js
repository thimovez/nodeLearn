const Application = require('./framework/Application');
const userRouter = require('./src/user-router');

const PORT = process.env.PORT || 5000;
const app = new Application();
// const router = new Router();


app.addRouter(userRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
