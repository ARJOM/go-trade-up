import app from 'firebase/app';
import 'firebase/storage';
import config from '../config/firebase'

const defaultApp = app.initializeApp(config);

export const storage = defaultApp.storage();
