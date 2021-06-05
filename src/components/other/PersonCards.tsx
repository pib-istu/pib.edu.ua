import React, { FC } from 'react'

interface PersonCardProps {
  readonly title: string
  readonly name: string
  readonly position?: string
}

const PersonCard: FC<PersonCardProps> = ({ title, name, position }) => {
  return (
    <li>
      <b>{title}</b><br />
      <span className="text-blue">{name}</span>{position ? <span className="text-dim">, {position}</span> : null}
    </li>
  );
}

interface PersonCardsProps {
  readonly persons: readonly PersonCardProps[]
}

export const PersonCards: FC<PersonCardsProps> = ({ persons }) => {
  return (
    <ul className="list-dots">
      {persons.map((person) => (<PersonCard {...person} />))}
    </ul>
  )
}
