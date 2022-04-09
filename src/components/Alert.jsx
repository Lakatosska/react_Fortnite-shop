import { useEffect } from 'react';

function Alert(props) {
  const { displayName = '', closeAlert } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
    // чтобы не ругался на зависимости (name не подчеркивал), пишем строчку ниже:
    // eslint-disable-next-line
  }, [displayName]);

  return ( 
    <div id="toast-container">
      <div className="toast">{displayName} добавлен в корзину</div>
    </div>
  )
}

export { Alert };