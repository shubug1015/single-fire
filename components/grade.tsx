import Image from 'next/image';

export const grade = (grade: string) => {
  if (grade === '1') {
    return '불씨';
  }

  if (grade === '2') {
    return '불꽃';
  }

  if (grade === '3') {
    return '파이어';
  }
};

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
