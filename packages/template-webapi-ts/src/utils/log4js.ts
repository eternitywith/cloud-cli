import { isProduction } from '../config'
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
      appenders: isProduction ? ['stdout'] : ['stdout', 'dateFile'],
      level: 'trace',
      enableCallStack: true,
    },
  },
})

export const logger = log4js.getLogger()

export default logger
