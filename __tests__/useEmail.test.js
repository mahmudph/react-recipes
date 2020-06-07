import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import useEmail from '../src/useEmail';

afterEach(cleanup);

describe('useEmail', () => {
  it('should return error message when email is not valid', () => {
    const { result } = renderHook(() => useEmail('abdika', 'maaf email yang anda masukan tidak valid'));
    const { msgError } = result.current;
    expect(msgError).toEqual('maaf email yang anda masukan tidak valid');
  });
  it('should return null error when email is valid', () => {
    const { result } = renderHook(() => useEmail('mahmud120398@gmail.com', 'maaf email yang anda masukan tidak valid'));
    const { msgError } = result.current;
    expect(msgError).toBeNull();
  });
  it('should return default error when errorhandler not assigned and email is not valid', () => {
    const { result } = renderHook(() => useEmail('mahmud120398.com'));
    const { msgError } = result.current;
    expect(msgError).toEqual('mahmud120398.com is not valid email');
  });
});
