
const { ipcMain } = require('electron');
const logger = require('../../logger');
const { encryptRC4, decryptRC4, encryptAES256, decryptAES256 } = require('../utils/utils-crypto');


// encryptRC4
ipcMain.on('sync-encryptRC4', (event, key, str) => {
  logger.debug('encryptRC4 req:', str)
  event.returnValue = encryptRC4(key, str);
  
});

// decryptRC4
ipcMain.on('sync-decryptRC4', (event, key, cipherStr) => {
  logger.debug('decryptRC4 req:', cipherStr)
  event.returnValue = decryptRC4(key, cipherStr)
});

// encryptAES256
ipcMain.on('sync-encryptAES256', (event, key, str) => {
  logger.debug('encryptAES256 req:', key, str)
  event.returnValue = encryptAES256(skey, strtr)
  
});

// decryptAES256
ipcMain.on('sync-decryptAES256', (event, key, cipherStr) => {
  logger.debug('decryptAES256 req:', key, cipherStr)
  event.returnValue = decryptAES256()
});