import { useCallback, useEffect, useState } from 'react';

export const useCountdownTimer = (targetDate: Date) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date(),
      isGreaterThanZero = difference > 0;

    if (!isGreaterThanZero) return [0, 0, 0, 0];

    const days = Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours = Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((difference / 1000 / 60) % 60),
      seconds = Math.floor((difference / 1000) % 60);

    return [days, hours, minutes, seconds];
  }, [targetDate]);

  const [t, setTimeLeft] = useState(calculateTimeLeft());
  const updateTime = useCallback(() => setTimeLeft(calculateTimeLeft()), [calculateTimeLeft]);

  useEffect(() => {
    const timer = setTimeout(updateTime, 1000);
    return () => clearTimeout(timer);
  });

  return t;
};
