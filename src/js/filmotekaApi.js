import axios from 'axios';

export default class ApiFilmoteka {
  constructor() {
    this.filmName = '';
    this.pageNumber = 1;
    this.filmId = null;
    this.API_KEY = '74bfe718a55ac7916c6e6ad87b15f944';
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.totalPages = 0;
  }

  setPageNumber(newPageNumber) {
    this.pageNumber = newPageNumber;
  }

  setFilmId(newFilmId) {
    this.filmId = newFilmId;
  }

  setFilmName(newName) {
    this.filmName = newName;
  }
  getFilmName() {
    return this.filmName;
  }

  getPageNumber() {
    return this.pageNumber;
  }

  async fetchFilmsByName() {
    axios.defaults.baseURL = this.BASE_URL;

    try {
      const response = await axios.get(
        `search/movie?api_key=${this.API_KEY}&language=en-US&query=${this.filmName}&page=${this.pageNumber}&include_adult=false`
      );
      const { data } = response;
      // Изменяет значение в свойстве totalPages екземпляра класса для пагинации
      this.totalPages = data.total_pages;

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
    return response.data.results;
  }

  async fetchFilmsById() {
    axios.defaults.baseURL = this.BASE_URL;

    try {
      const response = await axios.get(
        `movie/${this.filmId}?api_key=${this.API_KEY}&language=en-US`
      );
      // console.log(response);
      const { data } = response;
      return data;
    } catch (error) {
      console.log(error);
    }
    return data;
  }

  // Для получения ответа от сервера с релевантной страницей,
  // перед использованием функции необходимо использовать метод setPageNumber() на екземпляре класса
  // ПРИМЕР api = new ApiFilmoteka (это пимер инициализации екземпляра класса) => api.setPageNumber(номер страницы)

  async fetchPopularsFilms() {
    axios.defaults.baseURL = this.BASE_URL;

    try {
      const { data } = await axios.get(
        `/trending/movie/week?api_key=${this.API_KEY}&page=${this.pageNumber}`
      );
      // Изменяет значение в свойстве totalPages екземпляра класса для пагинации
      this.totalPages = data.total_pages;
      return data.results;
    } catch (error) {
      console.log(error);
    }
    return data.results;
  }

  async fetchTrailers() {
    axios.defaults.baseURL = this.BASE_URL;
    try {
      const { data } = await axios.get(
        `movie/${this.filmId}/videos?api_key=${this.API_KEY}&language=en-US`
      );
      return data.results;
    } catch (error) {
      console.log(error);
    }
    return data.results;
  }
}
