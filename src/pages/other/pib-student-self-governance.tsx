// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Студентське самоврядування"

import React from 'react';
import { WithSidebar } from 'components/WithSidebar';
import { PersonCards } from 'components/other/PersonCards';

const PERSONS = [
  {
    title: 'Голова парламенту',
    name: 'Шило Каріна',
    position: 'М-31'
  },
  {
    title: 'Заступники голови парламенту',
    name: 'Івко Владислав',
    position: 'НГІ-31'
  },
  {
    title: 'Голова волонтерського сектору',
    name: 'Михайло Усупашвілі',
    position: 'ІПЗ-21'
  },
  {
    title: 'Голова інформаційного сектору',
    name: 'Сакевич Дмитро',
    position: 'ФР-21'
  },
  {
    title: 'Голова сектору «Дозвілля»',
    name: 'Першина Світлана',
    position: 'ЮП-11'
  },
  {
    title: 'Голова спортивного сектору',
    name: 'Фадеєєв Дмитро',
    position: 'Ф-11'
  },
  {
    title: 'Секретар',
    name: 'Алексеєнко Олександр',
    position: 'М-31'
  },
];

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Студентське самоврядування інституту
        </h1>
      </div>

      <h2>Поточный склад</h2>

      <PersonCards persons={PERSONS} />

      <br />
      <br />

      <p>
        <a href="/media/docs/other/student-self-governance/Положення про Студентський парламент ПІБ МНТУ.pdf" className="gold external" target="_blank">Положення про Студентський парламент ПІБ МНТУ</a>
      </p>

      <br />
      <br />
    </WithSidebar>
  );
};
