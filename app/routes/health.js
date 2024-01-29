'use strict'

const router = require('express').Router()

const pidusage = require('pidusage')
const os = require('os')

const { name: AppName } = require('../../package.json')

router.get('/', async (req, res, next) => {
  const stats = await pidusage(process.pid)

  return res.json(
    Object.assign(await pidusage(process.pid), {
      current_date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }),
      uptime_hours: Math.floor(os.uptime() / 3600 / 24),
      node_version: process.version,
      node_env: process.env.NODE_ENV,
      os_type: os.type(),
      os_platform: os.platform(),
      os_arch: os.arch(),
      os_release: os.release(),
      num_cpus: os.cpus().length,
      total_mem_mb: Math.round(os.totalmem() / 1024 / 1024),
      free_mem_mb: Math.round(os.freemem() / 1024 / 1024),
      app_usage_mem_mb: Math.round(stats.memory / 1024 / 1024),
      load_avg_15_min: os.loadavg()[2] / os.cpus().length,
      service: AppName
    })
  )
})

module.exports = router
