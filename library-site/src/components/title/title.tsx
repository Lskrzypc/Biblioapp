import { FC } from 'react';

type TitleProps = {
  content: string;
};

export const Title: FC<TitleProps> = ({ content }) => (
  <p className="font-outfit font-semibold text-3xl text-gray-project">
    {content}
  </p>
);
