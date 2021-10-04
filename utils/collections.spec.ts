import { sortBy } from './collections';

describe('sortBy', () => {
  const collectionToSort = [
    { id: '1', name: 'Rafael', surname: 'Perez' },
    { id: '2', name: 'Javier', surname: 'Perez' },
    { id: '3', name: 'Jose', surname: 'Romero' },
    { id: '4', name: 'Juan', surname: 'Ramirez' }
  ];

  it('current order criteria should return a collection ordered by ID asc', () => {
    const newCollection = [...collectionToSort].sort(sortBy('id', 'asc'));
    expect(newCollection).toStrictEqual(collectionToSort);
  });

  it('new order criteria should return a collection ordered by Surname asc', () => {
    const newCollection = [...collectionToSort].sort(sortBy('surname', 'desc'));

    expect(newCollection).toStrictEqual([
      { id: '3', name: 'Jose', surname: 'Romero' },
      { id: '4', name: 'Juan', surname: 'Ramirez' },
      { id: '1', name: 'Rafael', surname: 'Perez' },
      { id: '2', name: 'Javier', surname: 'Perez' }
    ]);
  });

  it('should return a collection ordered by Surname desc', () => {
    const newCollection = [...collectionToSort].sort(sortBy('surname'));

    expect(newCollection).toStrictEqual([
      { id: '3', name: 'Jose', surname: 'Romero' },
      { id: '4', name: 'Juan', surname: 'Ramirez' },
      { id: '1', name: 'Rafael', surname: 'Perez' },
      { id: '2', name: 'Javier', surname: 'Perez' }
    ]);
  });

  it('two order criteria should return a collection ordered by Surname asc and Name asc', () => {
    const newCollection = [...collectionToSort]
      .sort(sortBy('name', 'asc'))
      .sort(sortBy('surname', 'asc'));

    expect(newCollection).toStrictEqual([
      { id: '2', name: 'Javier', surname: 'Perez' },
      { id: '1', name: 'Rafael', surname: 'Perez' },
      { id: '4', name: 'Juan', surname: 'Ramirez' },
      { id: '3', name: 'Jose', surname: 'Romero' }
    ]);
  });
});