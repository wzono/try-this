export type ClsType = 'string' | number | Record<string, any> | any[]

function toCls(arg: ClsType): string {
  let cls = ''
  if (typeof arg === 'string' || typeof arg === 'number') {
    cls += arg
  }
  else if (typeof arg === 'object') {
    if (Array.isArray(arg)) {
      cls += ' '
      cls += clsx(arg)
    }
    else {
      for (const [key, value] of Object.entries(arg)) {
        if (value)
          cls += ` ${key}`
      }
    }
  }

  return cls
}
function clsx(...args: ClsType[]): string {
  let className = ''
  for (const arg of args) {
    const cls = toCls(arg)
    if (cls)
      className += ` ${cls}`
  }

  return className.trim()
}

export default clsx
