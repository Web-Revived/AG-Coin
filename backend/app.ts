import createError from "http-errors"
import express, { Request, Response, NextFunction } from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import Router from "./routes/routes"
import express_session from "express-session"
import store from "./utils/store"
import dotenv from "dotenv"
import cors from 'cors';
dotenv.config()

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* Setup CORS */
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express_session({
  secret: "CAL8z2J3de",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 4 * 6 // 6 months
  },
  store,
  resave: true,
  saveUninitialized: false,
}))

app.use('/api/user', Router.User);
app.use('/api/auth', Router.Auth);
app.use('/api/blog', Router.Blog);
app.use('/api/tags', Router.Tag);
app.use('/api/feed', Router.Feed);
app.use('/api/comment', Router.Comment);
// app.use('/api/support', Router.Support);

app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

app.use(function (err: any, req: Request, res: Response) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export default app;

