import { useCallback, useEffect, useState } from 'react';

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/**
 * useEmail is hoook used to validation email input
 * @param {String} state
 * @param {String} errHandler
 */

const useEmail = (state, errHandler) => {
  const [value, setValue] = useState(state);
  const [msgError, setMsgError] = useState(errHandler);

  const setupInputVal = useCallback(() => {
    /*
    remove error email is valid when msgError is assigned
    otherwhise just pass
    */
    if (emailRegex.test(value) && msgError) {
      if (!msgError) {
        setMsgError(`${value} is not valid email`);
      } else {
        setMsgError(null);
      }
    }
    if (msgError == null) { setMsgError(`${value} is not valid email`); }
  }, [value]);

  useEffect(() => {
    setupInputVal();
  }, [value]);

  return {
    value,
    setValue,
    msgError,
  };
};

export default useEmail;
