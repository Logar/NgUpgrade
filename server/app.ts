import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';

const app = express();

dotenv.config();
app.set('title', 'Express Server');
app.set('port', (process.env.PORT || 3000));

app.use(compression({
  filter: function(req, res) {
    return (/json|text|javascript|css|font|svg/)
    .test(res.getHeader('Content-Type'));
  },
  level: 9
}));

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

export { app };
