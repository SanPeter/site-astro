import FtpDeploy from 'ftp-deploy';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadEnv } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __localroot = __dirname + '/dist';

const ftpDeploy = new FtpDeploy();

const { FTP_USER } = loadEnv(process.env.FTP_USER || '', process.cwd(), "");
const { FTP_PASSWORD } = loadEnv(process.env.FTP_PASSWORD || '', process.cwd(), "");
const { FTP_HOST } = loadEnv(process.env.FTP_HOST || '', process.cwd(), "");

const config = {
  user: FTP_USER,
  // Password optional, prompted if none given
  password: FTP_PASSWORD,
  host: FTP_HOST,
  port: 21,
  localRoot: __localroot,
  remoteRoot: '/',
  include: ['*', '**/*'], // this would upload everything except dot files
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err));
