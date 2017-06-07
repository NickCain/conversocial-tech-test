import { action } from './helpers';

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = data => action(SEND_MESSAGE, { data });
