import {IS_PRODUCTION} from '../config'
import log4js from 'log4js'

log4js.configure({
  appenders: {
    dateFile: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd-hh.log',
      compress: true,
      alwaysIncludePattern: true,
      daysToKeep: 30,
      maxLogSize: '100k',
      layout: {
        type: 'pattern',
        pattern: '%[[%d] [%p] [%f{2}:%l:%o] %F %] %m',
      },
    },
    stdout: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '%[[%d] [%p] [%f{2}:%l:%o] %F %] %m',
      },
    },
  },
  categories: {
    default: {
      appenders: IS_PRODUCTION ? ['stdout'] : ['stdout', 'dateFile'],
      level: 'trace',
      enableCallStack: true,
    },
  },
})

// eslint-disable-next-line @typescript-eslint/naming-convention
export const logger = log4js.getLogger()

export default logger
