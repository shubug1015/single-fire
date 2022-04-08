import Image from 'next/image';

export const gradeImg = (grade: string) => {
  if (grade === '1') {
    return (
      <Image
        src={'/icons/fire-1.png'}
        alt='Grade Icon'
        layout='fill'
        objectFit='cover'
      />
    );
  }

  if (grade === '2') {
    return (
      <Image
        src={'/icons/fire-2.png'}
        alt='Grade Icon'
        layout='fill'
        objectFit='cover'
      />
    );
  }

  if (grade === '3') {
    return (
      <Image
        src={'/icons/fire-3.png'}
        alt='Grade Icon'
        layout='fill'
        objectFit='cover'
      />
    );
  }
};
