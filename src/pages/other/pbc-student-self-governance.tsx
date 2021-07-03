// $prev_title: "ПІБ МНТУ - Полтавський інститут Бізнесу - Студентське самоврядування"

import React from 'react';
import { WithSidebar } from 'components/WithSidebar';
import { PersonCards } from 'components/other/PersonCards';

const PERSONS = [
  {
    title: 'Голова парламенту',
    name: 'Поліна Лавриненко',
    position: 'ФК-21'
  },
  {
    title: 'Заступники голови парламенту',
    name: 'Тетяна Токарь',
    position: 'ІПЗК-21'
  },
  {
    title: 'Голова волонтерського сектору',
    name: 'Віталій Вишнівецький',
    position: 'ФК-21'
  },
  {
    title: 'Голова інформаційного сектору',
    name: 'Владислав Арнаут',
    position: 'ІПЗК-21'
  },
  {
    title: 'Голова сектору «Дозвілля»',
    name: 'Голота Вячеслав',
    position: 'ФК-21'
  },
  {
    title: 'Голова спортивного сектору',
    name: 'Гусинський Олександр',
    position: 'ФК-21'
  },
  {
    title: 'Секретар',
    name: 'Аміна Баккаєва',
    position: 'ФК-2'
  },
];

export default () => {
  return (
    <WithSidebar shouldShowSidebar={true}>
      <div id="page-header">
        <h1 className="text">
          Студентське самоврядування коледжу
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
