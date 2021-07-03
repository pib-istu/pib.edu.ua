import React, { FC } from 'react'

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
    <li className='easyfolderlisting__item'>
      <img className='easyfolderlisting__icon' src={info.iconSrc} alt={info.alt} />{' '}
      <a className='easyfolderlisting__link' href={url} target="_blank" rel="nofollow noreferrer">{name}</a>
    </li>
  )
}

export interface FileItem {
  readonly type: string
  readonly name: string
  readonly ext: string
  readonly url: string
}

interface Props {
  readonly files: readonly FileItem[]
}

export const Files: FC<Props> = ({ files }) => {
  return (
    <div className="easyfolderlisting">
      <ul style={{listStyle: 'none'}}>
        {files.map((f) => <File key={f.url} {...f} />)}
      </ul>
    </div>
  )
}

