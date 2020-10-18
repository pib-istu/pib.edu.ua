import React, { useEffect, useState } from 'react'
import { Files } from './Files'

interface ScheduleFile {
  readonly type: string
  readonly name: string
  readonly ext: string
  readonly url: string
}

export default () => {
  const [files, setFiles] = useState<readonly ScheduleFile[]>([])

  useEffect(() => {
    if (!window.fetch) {
      console.error('fetch not supported')
      return
    }

    window.fetch('https://pib.edu.ua/api/schedule-files/', {
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((r) => r.json())
      .then((r) => {
        if (!r) {
          console.error('Failed to fetch schedule files: null returned', r)
        }

        setFiles(r ?? [])
      })
      .catch((error) => console.error('Failed to fetch schedule files', error))
  }, [])

  return (
    <Files files={files} />
  )
}
