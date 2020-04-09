export const BaseUrl = (page) =>
  `https://newsapi.org/v2/top-headlines?country=id&apiKey=6566df4437f94a3bb6e92809f06f46e8&pageSize=10&page=${page}`;
export const categoryList = [
  {
    name: 'Semua',
    isActive: true,
  },
  {
    name: 'Tanya Jawab',
    isActive: false,
  },
  {
    name: 'Terbaru',
    isActive: false,
  },
  {
    name: 'Populer',
    isActive: false,
  },
  {
    name: 'Event',
    isActive: false,
  },
  {
    name: 'Topik',
    isActive: false,
  },
];
