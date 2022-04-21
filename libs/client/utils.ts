export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export const trimDate = (date: string, start: number, end: number) =>
  date.split('T')[0].slice(start, end);
