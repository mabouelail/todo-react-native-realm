const categories = [
  {
    categoryType: 'work',
    numberOfTasks: 0,
    tasks: [],
  },
  {
    categoryType: 'music',
    numberOfTasks: 0,
    tasks: [],
  },
  {
    categoryType: 'travel',
    numberOfTasks: 0,
    tasks: [],
  },
  {
    categoryType: 'study',
    numberOfTasks: 0,
    tasks: [],
  },
  {
    categoryType: 'home',
    numberOfTasks: 0,
    tasks: [],
  },
  {
    categoryType: 'drawing',
    numberOfTasks: 0,
    tasks: [],
  },
  {
    categoryType: 'shopping',
    numberOfTasks: 0,
    tasks: [],
  },
];

function check(input, categories) {
  const avail = categories.findIndex(
    ({categoryType}) => categoryType === input.toLowerCase(),
  );
  if (avail >= 0) {
    console.log('category found:', avail);
  } else {
    console.log('category not found');
  }
}
check('home', categories);
