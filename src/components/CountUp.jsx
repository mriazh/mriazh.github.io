import { useCountUp } from '../hooks/useCountUp';

export default function CountUp({ target, suffix = '', duration = 2000, delay = 0 }) {
  const count = useCountUp(target, duration, delay);
  return <span>{count}{suffix}</span>;
}
