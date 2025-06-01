interface TableDetails {
  id: number;
  storyName: string;
  categories: string;
  storyType?: string;
  publish: string;
}

export const tableDetails: TableDetails[] = [
  {
    id: 1,
    storyName: "Story One",
    categories: "Fiction",
    storyType: "Short Story",
    publish: "2023-10-01",
  },
  {
    id: 2,
    storyName: "Story Two",
    categories: "Non-Fiction",
    storyType: "Love Story",
    publish: "2023-10-02",
  },
  {
    id: 3,
    storyName: "Story Three",
    categories: "Fantasy",
    storyType: "Suspense Story",
    publish: "2023-10-03",
  },
  {
    id: 4,
    storyName: "Story Four",
    categories: "Science Fiction",
    storyType: "Romantic Story",
    publish: "2023-10-04",
  },
  {
    id: 5,
    storyName: "Story Five",
    categories: "Mystery",
    storyType: "Horror Story",
    publish: "2023-10-05",
  },
  {
    id: 6,
    storyName: "Story Six",
    categories: "Thriller",
    storyType: "Suspense Story",
    publish: "2023-10-06",
  },
  {
    id: 7,
    storyName: "Story Seven",
    categories: "Romance",
    storyType: "Vampire Story",
    publish: "2023-10-07",
  },
  {
    id: 8,
    storyName: "Story Eight",
    categories: "Historical Fiction",
    storyType: "historical Story",
    publish: "2023-10-08",
  },
  {
    id: 9,
    storyName: "Story Nine",
    categories: "Adventure",
    storyType: "Golden Story",
    publish: "2023-10-09",
  },
];
