import Link from "next/link";
import { useRouter } from 'next/router';

const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const menuItemStyles = 'nav-link px-2 text-'

  return <nav className="me-lg-auto">
    <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
      <li><Link href="/" className={menuItemStyles + (pathname === '/' ? 'white' : 'secondary')}>Home</Link></li>
      <li><Link href="/expenses" className={menuItemStyles + (pathname === '/expenses' ? 'white' : 'secondary')}>Expenses</Link></li>
      <li><Link href="/income" className={menuItemStyles + (pathname === '/income' ? 'white' : 'secondary')}>Income</Link></li>
    </ul>
  </nav>
};

export default Navigation;