import { getItem, removeItem, setItem } from './localStorage';

afterEach(() => {
  window.localStorage?.clear();
})

describe('localStorage', () => {
  it('should return an empty string', () => {
    const value = getItem('referrer')
    expect(value).toBe('')
  })

  it('should set and get new localStorage', () => {
    setItem('referrer', 'test url');

    const value = getItem('referrer')
    expect(value).toBe('test url')
  })

  it ('should set a localStorage, delete it and get return an empty string', () => {
    setItem('referrer', 'test url')
    removeItem('referrer');

    const value = getItem('referrer');
    expect(value).toBe('');
  })
})

describe('cookies', () => {
  let initialCookies: string;
  let initialLocalStorage: Storage;

  beforeAll(() => {
    initialCookies = global.document.cookie;
    initialLocalStorage = { ...global.localStorage };

    // Disable localStorage
    Object.defineProperty(global, 'localStorage', {
      value: undefined
    });
  })

  beforeEach(() => {
    // Mocks a new cookies implementation
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: '',
    });
  })

  afterAll(() => {
    // Restore localStorage implementation
    Object.defineProperty(global, 'localStorage', {
      value: initialLocalStorage,
    })
    global.document.cookie = initialCookies;
  })

  it('should return an empty string', () => {
    const value = getItem('referrer')

    expect(value).toBe('')
  })

  it('should set and get new cookie', () => {
    setItem('referrer', 'test url');

    const value = getItem('referrer')
    expect(value).toBe('test url')
  })

  it ('should set a cookie, delete it and get return an empty string', () => {
    setItem('referrer', 'test url')
    removeItem('referrer');

    const value = getItem('referrer');
    expect(value).toBe('');
  })
})
