const genresList = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  27: 'Horror',
  36: 'History',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

//создаем функцию searchGenresById, которая возвращает строку с жанрами на основе  genre_ids,
export const searchGenresById = idArrayList => {
  // условие
  if (idArrayList.length > 2) {
    idArrayList.splice(2);
    idArrayList.push('etc');
  }

  return idArrayList
    .map(item => {
      return genresList[item] || 'etc';
    })
    .join(', ');
};
