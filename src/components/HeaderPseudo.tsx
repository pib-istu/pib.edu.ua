import React, { FC, useEffect, useState } from 'react'

declare var jQuery: any

interface FileTypeInfo {
  iconSrc:string
  alt: string
}

const EXT_MAP: Record<string, FileTypeInfo> = {
  "exe": {
    iconSrc: '/assets/files/application.png',
    alt: 'An executable file',
  },
  "c": {
    iconSrc: '/assets/files/page_white_c.png',
    alt: 'A C file',
  },
  "cpp": {
    iconSrc: '/assets/files/page_white_cplusplus.png',
    alt: 'A C plus plus file',
  },
  "cs": {
    iconSrc: '/assets/files/page_white_csharp.png',
    alt: 'A C sharp file',
  },
  "wmv,mp4,mov,divx,avi,flv,mkv": {
    iconSrc: '/assets/files/film.png',
    alt: 'A video file',
  },
  "htm,html": {
    iconSrc: '/assets/files/html.png',
    alt: 'An html file',
  },
  "bmp,jpg,jpeg,png,gif,tif": {
    iconSrc: '/assets/files/picture.png',
    alt: 'An image file',
  },
  "mp3,wma": {
    iconSrc: '/assets/files/music.png',
    alt: 'A music file',
  },
  "java,py": {
    iconSrc: '/assets/files/page_white_code.png',
    alt: 'A code file',
  },
  "pdf,ps": {
    iconSrc: '/assets/files/page_white_acrobat.png',
    alt: 'An Adobe Acrobat file',
  },
  "zip": {
    iconSrc: '/assets/files/page_white_compressed.png',
    alt: 'A compressed ZIP file',
  },
  "swf": {
    iconSrc: '/assets/files/page_white_flash.png',
    alt: 'A flash SWF file',
  },
  "xls,xlsx": {
    iconSrc: '/assets/files/page_white_excel.png',
    alt: 'A Microsoft Excel file',
  },
  "php": {
    iconSrc: '/assets/files/page_white_php.png',
    alt: 'A PHP file',
  },
  "ppt,pptx": {
    iconSrc: '/assets/files/page_white_powerpoint.png',
    alt: 'A Microsoft Powerpoint file',
  },
  "txt": {
    iconSrc: '/assets/files/page_white_text.png',
    alt: 'A Text file',
  },
  "sln": {
    iconSrc: '/assets/files/page_white_visualstudio.png',
    alt: 'A Visual Studio Solution file',
  },
  "doc,docx": {
    iconSrc: '/assets/files/page_white_word.png',
    alt: 'A Microsoft Word file',
  },
  "tar.gz,tgz,tbz,tb2,tar.bz2,taz,tar.Z,tlz,tar.lz,txz,tar.xz,7z,rar": {
    iconSrc: '/assets/files/page_white_zip.png',
    alt: 'A Compressed file',
  },
}

const UNKNOWN: FileTypeInfo = {
  iconSrc: '/assets/files/page_white.png',
  alt: 'A file of unknown type',
}

const findFileInfo = (ext: string): FileTypeInfo => {
  const entry = Object.entries(EXT_MAP)
    .find(([e]) => e.split(',').some((e) => e === ext))

  return entry ? entry[1] : UNKNOWN
}

interface FileProps {
  name: string
  ext: string
  url: string
}

const File: FC<FileProps> = ({ name, ext, url }) => {
  const info = findFileInfo(ext)

  return (
    <li>
      <img src={info.iconSrc} alt={info.alt} />{' '}
      <a href={url}>{name}</a>
    </li>
  )
}

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
      .then((r) => setFiles(r))
      .catch((error) => console.error('Failed to fecth schedule files', error))
  }, [])

  useEffect(() => {
    jQuery('.divslide').showHide({
      speed: 300,  // speed you want the toggle to happen
      easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
      changeText: 0, // if you dont want the button text to change, set this to 0
    });
  }, [])

  return (
    <div id="header_pseudo">
      <div className="wrapper">
        <a className="schedule divslide" style={{float: 'right', marginRight: '100px'}} href="#" data-rel="#header_pseudo_schedule_box" title="Розклад занять">Розклад занять</a>
          {/* <div id="header_pseudo_search_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box" />
          </div> */}
          <div id="header_pseudo_schedule_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box">
              <div className="custom">
                <br />
                <p style={{fontStyle: 'italic', textAlign: 'center'}}>Тут Ви можете завжди знайти останній розклад занять для Вашого курсу</p>
                <br />
              </div>
              <div className="easyfolderlisting">
                <ul className="123easyfolderlisting" style={{listStyle: 'none'}}>
                  {files.map((f) => <File key={f.url} {...f} />)}
                </ul>
              </div>
            </div>
          </div>
          {/* <div id="header_mail_box" className="toggleDiv tooltip-box" style={{display: 'none'}}>
            <div className="arrow" />
            <div className="box">
              Form goes here
            </div>
          </div> */}
      </div>
    </div>
  )
}
